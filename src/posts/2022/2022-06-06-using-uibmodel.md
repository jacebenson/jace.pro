---
title: Using uibModel
description: "What is the post about?\r\n\r\nWhat things would help with writing the post\r\n\r\n\r\n\r\njavascript\r\nc.openModal = function(action) {\r\n        c.modalInstance = $uibMo..."
date: '2022-06-07'
tags:
  - javascript
  - html
redirectFrom:
  - /using-uibmodel/
  - /p/2022-06-06-using-uibmodel/
---

<!--StartFragment-->

**What is the post about?**

**What things would help with writing the post**

<!--EndFragment-->

```javascript
c.openModal = function(action) {
        c.modalInstance = $uibModal.open({
            templateUrl: 'ticket-modal.html',
            controllerAs: 'modalC',
            scope: $scope,
            controller: function() {
                var modalC = this;
                modalC.modalInstance = c.modalInstance;
                modalC.action = action;
                modalC.messages = c.getMessages(action);
                modalC.data = c.data;
                modalC.record = c.data.recordId;
                modalC.action_reason = '';
                //modalC.fnSubmit = c.submitModal(action,modalC.record,modalC.action_reason);
            }
        });
    }
```

<!--StartFragment-->

<!-- External image: ![image](https://user-images.githubusercontent.com/638764/54949191-80c35e80-4f0c-11e9-8e8f-d8353a141a2e.png) -->

<!--EndFragment-->

<!--StartFragment-->

tahnk t1mb0b

<!--EndFragment-->