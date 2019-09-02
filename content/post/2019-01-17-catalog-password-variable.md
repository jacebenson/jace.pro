---
date: '2019-01-17'
layout: post
title: 'How is there still not a password variable in service catalog?'
authors: ["jace"]
---

I was asked to add a password field on a catalog item and I was appalled
to find this isn't an out of box variable type. I went ahead and made a
widget to make one that is secure but I feel we shouldn't have to.

So in my case I wanted the following;

-   2 Masked Password fields that verified they matched and that they
    match a regex expression.
-   Store the password as a [encrpyted](/glideencrypter/) value so I can
    use is later but keep it *secure*.

Here's the end result;

![2019-01-17-catalog-password-variable.gif](/uploads/2019-01-17-catalog-password-variable.gif)

To make this follow these steps;

1.  Make a variable type of string, variable name of `password`.

2.  Make a variable type of macro with label, variable name of
    `password_macro`.

3.  Make a Service Portal Widget with these values; **HTML Template**

    ``` {.html}
    <div class = "form-group ng-scope ng-isolate-scope" style = "" >
      <label class="field-label ng-binding ng-scope" title="" tooltip-right="true" data-original-title="">
        <span class="field-decorations">
          <span class="fa fa-asterisk mandatory ng-hide" 
                title="Mandatory" 
                style="padding-right: 0.25em;" 
                aria-label="Mandatory " 
                aria-hidden="true">
          </span>
        </span>
        Enter Password
        <span class="sr-only ng-binding"></span>
      </label>
      <span class="type-string field-actual">
        <span class="ng-scope">
          <input id="pwd1" 
                 type="password"
                 class="form-control ng-pristine ng-untouched ng-valid ng-scope ng-valid-maxlength ng-empty" 
                 maxlength="" 
                 ng-model="c.data.passwordInput1" 
                 ng-change="setPassword('password')"
           />
        </span>
      </span>
      <label class="field-label ng-binding ng-scope" title="" tooltip-right="true" data-original-title="">
        <span class="field-decorations">
          <span class="fa fa-asterisk mandatory ng-hide" 
                title="Mandatory" 
                style="padding-right: 0.25em;" 
                aria-label="Mandatory " 
                aria-hidden="true">
          </span>
        </span>
        Repeat Password
        <span class="sr-only ng-binding"></span>
      </label>
      <span class="type-string field-actual">
        <span class="ng-scope">
          <input id="pwd2" 
                 type="password"
                 class="form-control ng-pristine ng-untouched ng-valid ng-scope ng-valid-maxlength ng-empty" 
                 maxlength="" 
                 ng-model="c.data.passwordInput2" 
                 ng-change="setPassword('password')"
          />
        </span>
      </span>
      <div ng-show="field.messages" aria-hidden="true" class="ng-hide"></div>
    </div>
    ```

    **Client Script**

    ``` {.js}
    function($scope) {
      //This is the controller, we've included $scope in the function above because it's easy to work with
      var c = this;
      c.data.passwordInput = '';
      //Simplify accessing g_form within the client script by setting it as a variable named g_form
      var g_form = $scope.page.g_form;
      $scope.g_form = $scope.page.g_form;
      $scope.setPassword = function(varname) {
        /*
        console.log(JSON.stringify({
            "c.data.passwordInput1": c.data.passwordInput1,
            "c.data.passwordInput2": c.data.passwordInput2
        },'  '));
        */
        if (c.data.passwordInput1 == c.data.passwordInput2) {
          if (c.data.passwordInput1.match(/^([a-zA-Z0-9]{16,})$/g)) {
            c.server.get({
              passwordInput: c.data.passwordInput1
            }).then(function(r) {
              g_form.setValue(varname, r.data.passwordEncrypted);
              g_form.hideFieldMsg("password_macro", true); //hides all messages
            });
          } else {
            var errorShort = "Passwords must be at least 16 characters and only allow a alphanumeric value.";
            g_form.hideFieldMsg("password_macro", true); //hides all messages
            g_form.showFieldMsg("password_macro", errorShort, "error", false);
          }
        } else {
      var errorMatch = "Passwords must be at least 16 characters and only allow a alphanumeric value.";
          g_form.clearValue(varname);
          g_form.hideFieldMsg("password_macro", true); //hides all messages
          g_form.showFieldMsg("password_macro", errorMatch, "error", false);
        }
      };
    }
    ```

    **Server Script**

    ``` {.js}
    (function() {
        if(input && input.passwordInput){
            var encrypter = new GlideEncrypter();
            data.passwordEncrypted = encrypter.encrypt(input.passwordInput);
        }
    })();
    ```
