---
layout: page
title: glide.workflow.workflow_mutex_lease_duration
description: "Max duration in minutes that we want the workflow manager to hold onto a mutex when executing a transition path.  The execution of workflow transitions required the acquisition of a Mutex. Currently the Mutex is a lease, not a guaranteed hold. The lease, for the workflow engine is defaulted to 15 minutes  which is derived from the default value of  500ms * 1800 (mutex wait * mutex spins)  If when running workflow there is reason to believe that the execution of an activity will exceed 15 minutes, set the value of this property to be the expected duration."
---
15