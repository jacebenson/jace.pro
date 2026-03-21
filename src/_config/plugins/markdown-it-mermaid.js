/**
 * Markdown-it plugin to render mermaid diagrams
 * Converts ```mermaid code blocks to <div class="mermaid"> elements
 */

export function markdownItMermaid(md) {
  // Store the original fence renderer
  const defaultFence = md.renderer.rules.fence || function(tokens, idx, options, env, slf) {
    const token = tokens[idx];
    const info = token.info ? md.utils.escapeHtml(token.info).trim() : '';
    const langName = info.split(/\s+/g)[0];
    const langClass = 'language-' + md.utils.escapeHtml(langName);
    
    return '<pre class="' + langClass + '"><code>' + 
           md.utils.escapeHtml(token.content) + 
           '</code></pre>\n';
  };

  // Override the fence renderer
  md.renderer.rules.fence = function(tokens, idx, options, env, slf) {
    const token = tokens[idx];
    const info = token.info ? token.info.trim() : '';
    const langName = info.split(/\s+/g)[0];

    // Check if this is a mermaid block
    if (langName === 'mermaid' || langName === 'mermaidjs') {
      // Use <div> tag - mermaid.js expects this format
      // Mermaid will parse this and replace it with the rendered diagram
      return '<div class="mermaid">' + token.content + '</div>\n';
    }

    // For all other code blocks, use the default renderer
    return defaultFence(tokens, idx, options, env, slf);
  };
}
