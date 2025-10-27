class SearchController {
  constructor() {
    this.searchInput = null;
    this.searchResults = null;
    this.searchClear = null;
    this.searchContainer = null;
    this.searchData = null;
    this.isLoading = false;
    this.debounceTimer = null;
    
    this.init();
  }

  async init() {
    // Find DOM elements
    this.searchInput = document.getElementById('search-input');
    this.searchResults = document.getElementById('search-results');
    this.searchClear = document.getElementById('search-clear');
    this.searchContainer = document.getElementById('search-container');

    if (!this.searchInput || !this.searchResults) {
      return; // Search not available on this page
    }

    // Bind event listeners
    this.searchInput.addEventListener('input', this.handleInput.bind(this));
    this.searchInput.addEventListener('focus', this.handleFocus.bind(this));
    this.searchClear.addEventListener('click', this.clearSearch.bind(this));
    
    // Close search when clicking outside
    document.addEventListener('click', this.handleClickOutside.bind(this));
    
    // Load search data
    await this.loadSearchData();
  }

  async loadSearchData() {
    if (this.isLoading || this.searchData) return;
    
    try {
      this.isLoading = true;
      const response = await fetch('/search.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      this.searchData = data.posts || [];
    } catch (error) {
      console.error('Failed to load search data:', error);
      this.showError('Search data could not be loaded.');
    } finally {
      this.isLoading = false;
    }
  }

  handleInput(event) {
    const query = event.target.value.trim();
    
    // Clear previous debounce timer
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    
    // Show/hide clear button
    this.searchClear.style.display = query ? 'block' : 'none';
    
    if (!query) {
      this.hideResults();
      return;
    }

    // Debounce search to avoid excessive processing
    this.debounceTimer = setTimeout(() => {
      this.performSearch(query);
    }, 150);
  }

  handleFocus() {
    const query = this.searchInput.value.trim();
    if (query && this.searchResults.children.length > 0) {
      this.showResults();
    }
  }

  handleClickOutside(event) {
    if (!this.searchContainer.contains(event.target)) {
      this.hideResults();
    }
  }

  clearSearch() {
    this.searchInput.value = '';
    this.searchInput.focus();
    this.searchClear.style.display = 'none';
    this.hideResults();
  }

  performSearch(query) {
    if (!this.searchData || this.isLoading) {
      this.showLoading();
      return;
    }

    const results = this.searchPosts(query);
    this.displayResults(results, query);
  }

  searchPosts(query) {
    const normalizedQuery = query.toLowerCase();
    const results = [];

    for (const post of this.searchData) {
      let score = 0;
      let matches = [];

      // Search in title (higher weight)
      const titleMatches = this.findMatches(post.title, normalizedQuery);
      if (titleMatches.length > 0) {
        score += titleMatches.length * 3;
        matches.push(...titleMatches.map(m => ({ ...m, field: 'title' })));
      }

      // Search in description (medium weight)
      const descMatches = this.findMatches(post.description, normalizedQuery);
      if (descMatches.length > 0) {
        score += descMatches.length * 2;
        matches.push(...descMatches.map(m => ({ ...m, field: 'description' })));
      }

      // Search in content (lower weight)
      const contentMatches = this.findMatches(post.content, normalizedQuery);
      if (contentMatches.length > 0) {
        score += contentMatches.length * 1;
        matches.push(...contentMatches.map(m => ({ ...m, field: 'content' })));
      }

      // Search in tags (medium weight)
      const tagsText = post.tags.join(' ');
      const tagMatches = this.findMatches(tagsText, normalizedQuery);
      if (tagMatches.length > 0) {
        score += tagMatches.length * 2;
        matches.push(...tagMatches.map(m => ({ ...m, field: 'tags' })));
      }

      if (score > 0) {
        results.push({
          ...post,
          score,
          matches
        });
      }
    }

    // Sort by score (descending) and return top 8 results
    return results.sort((a, b) => b.score - a.score).slice(0, 8);
  }

  findMatches(text, query) {
    const matches = [];
    const normalizedText = text.toLowerCase();
    
    // Exact phrase matching
    let index = normalizedText.indexOf(query);
    while (index !== -1) {
      matches.push({
        start: index,
        end: index + query.length,
        type: 'exact'
      });
      index = normalizedText.indexOf(query, index + 1);
    }

    // Individual word matching if no exact matches
    if (matches.length === 0) {
      const words = query.split(/\s+/).filter(word => word.length > 1);
      for (const word of words) {
        let wordIndex = normalizedText.indexOf(word);
        while (wordIndex !== -1) {
          matches.push({
            start: wordIndex,
            end: wordIndex + word.length,
            type: 'word'
          });
          wordIndex = normalizedText.indexOf(word, wordIndex + 1);
        }
      }
    }

    return matches;
  }

  displayResults(results, query) {
    if (results.length === 0) {
      this.showNoResults(query);
      return;
    }

    const html = results.map(result => this.renderResult(result, query)).join('');
    this.searchResults.innerHTML = html;
    this.showResults();
  }

  renderResult(result, query) {
    const date = new Date(result.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    // Highlight matches in title
    const highlightedTitle = this.highlightText(result.title, query);
    
    // Get a snippet from description or content
    const snippet = this.getSnippet(result, query);

    return `
      <div class="search-result">
        <div class="search-result-header">
          <h3 class="search-result-title">
            <a href="${result.url}">${highlightedTitle}</a>
          </h3>
          <time class="search-result-date">${date}</time>
        </div>
        <p class="search-result-snippet">${snippet}</p>
        <div class="search-result-tags">
          ${result.tags.slice(0, 3).map(tag => `<span class="search-result-tag">${tag}</span>`).join('')}
        </div>
      </div>
    `;
  }

  getSnippet(result, query) {
    const maxLength = 150;
    let text = result.description || result.content;
    
    if (!text) return '';
    
    // Try to find the query in the text for context
    const normalizedText = text.toLowerCase();
    const normalizedQuery = query.toLowerCase();
    const queryIndex = normalizedText.indexOf(normalizedQuery);
    
    if (queryIndex !== -1) {
      // Show text around the match
      const start = Math.max(0, queryIndex - 50);
      const end = Math.min(text.length, queryIndex + normalizedQuery.length + 50);
      text = (start > 0 ? '...' : '') + text.slice(start, end) + (end < text.length ? '...' : '');
    } else if (text.length > maxLength) {
      // Just truncate from beginning
      text = text.slice(0, maxLength) + '...';
    }
    
    return this.highlightText(text, query);
  }

  highlightText(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  showResults() {
    this.searchResults.style.display = 'block';
    this.searchContainer.classList.add('search-active');
  }

  hideResults() {
    this.searchResults.style.display = 'none';
    this.searchContainer.classList.remove('search-active');
  }

  showLoading() {
    this.searchResults.innerHTML = '<div class="search-loading">Searching...</div>';
    this.showResults();
  }

  showNoResults(query) {
    this.searchResults.innerHTML = `
      <div class="search-no-results">
        <p>No results found for "${query}"</p>
        <p class="search-no-results-hint">Try different keywords or browse <a href="/blog/">all posts</a></p>
      </div>
    `;
    this.showResults();
  }

  showError(message) {
    this.searchResults.innerHTML = `
      <div class="search-error">
        <p>${message}</p>
      </div>
    `;
    this.showResults();
  }
}

// Initialize search when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new SearchController());
} else {
  new SearchController();
}