---
title: 'Batch update ServiceNow store apps with one script'
description: >-
  Need to update multiple store apps? This script generates the payload for batch installation using the CI/CD API.
date: '2025-01-04'
tags: 
  - servicenow
  - scripts
redirectFrom:
  - /batch-update-servicenow-store-apps/
  - /p/2025-01-04-batch-update-servicenow-store-apps/
---

Got a bunch of ServiceNow store apps that need updating? Here's a script from Eric Riemer that makes it painless.  I have this here cause it's super useful.

# The problem

You have 10+ store apps that need updates. Clicking through each one individually is tedious.

# The solution

Use the CI/CD Batch Install API to update them all at once.

This script:
1. Finds all installed store apps with updates available
2. Builds a JSON payload
3. Gives you the API endpoint to paste it into

# The script

```js
/*----------------------------------------------------*/
/*                      AUTO                          */
/*  Have a bunch of apps that need to be updated?     */
/*  Run this and follow the directions in the output  */
/*  It will automaticallybuild and run a batch        */
/*  install of all of the needed updates.             */
/*                                                    */
/*         Latest code always available at            */
/*         https://snwizard.com/update-apps           */
/*                                                    */
/*----------------------------------------------------*/

//Want Demo Data with the app?
var loadDemoData = true;
var updateCheck = false; //this can take some time to run and adds a LOT of stuff to the log making the important bit harder to find

if (updateCheck) new sn_appclient.UpdateChecker().checkAvailableUpdates();

var prevName;
var appsArray = [];
var grSSA = new GlideRecord("sys_store_app");
grSSA.addEncodedQuery(
    "install_dateISNOTEMPTY^hide_on_ui=false^vendor=ServiceNow^ORvendorISEMPTY"
);
grSSA.orderBy("name");
grSSA.orderBy("version");
grSSA.query();
while (grSSA.next()) {
    var curName = grSSA.getValue("name");
    var latestVersion = updateAvailable(grSSA);
    if (curName == prevName) {
        continue;
    }
    if (latestVersion) {
        prevName = curName;
        var appObject = {
            displayName: curName,
            id: grSSA.getUniqueValue(),
            load_demo_data: loadDemoData,
            type: "application",
            requested_version: grSSA.getValue("latest_version"),
        };
        appsArray.push(appObject);
    }
}

function updateAvailable(grSSA) {
    var installedVersion = grSSA.getValue("version");
    var latestVersion = grSSA.getValue("latest_version");
    var installedArray = installedVersion.split(".");
    var latestArray = latestVersion.split(".");
    var len = Math.max(installedArray.length, latestArray.length);
    for (var i = 0; i < len; i++) {
        var installed = installedArray[i] ? parseInt(installedArray[i]) : 0;
        var latest = latestArray[i] ? parseInt(latestArray[i]) : 0;
        if (installed < latest) {
            return true;
        } else if (installed > latest) {
            return false;
        }
    }
    return false;
}
if (appsArray.length > 0) {
    gs.info("\n\n------------------------------------------------\n\nLinks to track progress below the payload information\n\n(scroll down)\n\n-----------------------------------------------\n\n");

    var appsPackages = {};
    appsPackages.packages = appsArray;
    appsPackages.name = "Update Apps";
    var data = new global.JSON().encode(appsPackages);

    var baseUrl = gs.getProperty("glide.servlet.uri");
    var update = new sn_appclient.AppUpgrader().installBatch(data);
    var updateObj = JSON.parse(update);
    gs.info(
        "\n\n------------------------------------------------\n\nOpen the Batch install link to monitor the installation progress. It may take some time for the apps to all populate in the related list. After all apps have populated the install will start and the State will change to In progress.\n\nBatch install:\n" +
        baseUrl +
        "nav_to.do?uri=sys_batch_install_plan.do?sys_id=" +
        updateObj.batch_installation_id +
        "\n\nExecution tracker:\n" +
        baseUrl +
        "nav_to.do?uri=sys_progress_worker.do?sys_id=" +
        updateObj.execution_tracker_id +
        "\n\n-----------------------------------------------\n\n"
    );
    var grSBIP = new GlideRecord('sys_batch_install_plan');
    if (grSBIP.get(updateObj.batch_installation_id)) {
        grSBIP.setValue('notes','It may take some time for the apps to all populate in the related list below (you can refresh the list as needed to see them populating). \n\nAfter all apps have populated the install will start and the State (above) will change to In progress. \n\nWhen the batch is done the state will update to Installed');
        grSBIP.update();
    }
} else {
    gs.info(
        "\n\n-----------------------------------------------\n\nAll apps appear to be up-to-date. \n\nIf you think this is incorrect please try running this script again with `updateCheck` set to `true`. This will check the store for any new updates.\n(sometimes there are apps in the Application Manager that say that there are updates but you can't actually update them)\n\n-----------------------------------------------\n\n"
    );
}
```

# How to use it

1. Run the script in **Scripts - Background**
2. Check the logs for the output
3. Script automatically kicks off the batch install
4. Click the links in the output to monitor progress

The batch install runs automatically now - no need to manually paste JSON into an API endpoint.

# Configuration options

Set `loadDemoData` to `false` if you don't want demo data.

Set `updateCheck` to `true` if you want to force check the store for new updates first. Warning: this adds a lot to the logs.

# What it checks

The query looks for:
- Apps that are installed (`install_dateISNOTEMPTY`)
- Not hidden from UI (`hide_on_ui=false`)
- Vendor is ServiceNow or empty

It then compares installed version vs latest version and only includes apps with updates available.

# Credit

Thanks to @eric R for this script.

Source: [https://snwizard.com/update-apps/](https://snwizard.com/update-apps/)
