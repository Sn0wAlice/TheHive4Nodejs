# TheHive4Nodejs
Nodejs module to interact with your TheHive5 instance

<p align="center">
    <img src="./.github/logo.png">
</p>

# Docs
## Classes

<dl>
<dt><a href="#Admin">Admin</a></dt>
<dd><p>This class is used to interact with the Admin API</p>
</dd>
<dt><a href="#Alert">Alert</a></dt>
<dd><p>Alert class to manage alerts</p>
</dd>
<dt><a href="#Alertstatus">Alertstatus</a></dt>
<dd><p>This class is used to interact with the alertstatus API</p>
</dd>
<dt><a href="#Attack">Attack</a></dt>
<dd><p>This class is used to interact with the Attack API</p>
</dd>
<dt><a href="#CaseReport">CaseReport</a></dt>
<dd><p>This class is used to interact with the case-report API</p>
</dd>
<dt><a href="#Case">Case</a></dt>
<dd><p>This class is used to interact with the case API</p>
</dd>
<dt><a href="#CaseReportTemplate">CaseReportTemplate</a></dt>
<dd><p>This class is used to interact with the CaseReportTemplate API</p>
</dd>
<dt><a href="#Casestatus">Casestatus</a></dt>
<dd><p>This class is used to interact with the casestatus API</p>
</dd>
<dt><a href="#CaseTemplate">CaseTemplate</a></dt>
<dd><p>This class is used to interact with the CaseTemplate API</p>
</dd>
<dt><a href="#Comment">Comment</a></dt>
<dd><p>This class is used to interact with the comment API</p>
</dd>
<dt><a href="#Cortex">Cortex</a></dt>
<dd><p>This class is used to interact with the Cortex API</p>
</dd>
<dt><a href="#Customfield">Customfield</a></dt>
<dd><p>This class is used to interact with the customfield API</p>
</dd>
<dt><a href="#Dashboard">Dashboard</a></dt>
<dd><p>This class is used to interact with the Dashboard API</p>
</dd>
<dt><a href="#Describe">Describe</a></dt>
<dd><p>This class is used to interact with the Describe API</p>
</dd>
<dt><a href="#Function">Function</a></dt>
<dd><p>This class is used to interact with the function API</p>
</dd>
<dt><a href="#License">License</a></dt>
<dd><p>This class is used to interact with the license API</p>
</dd>
<dt><a href="#Log">Log</a></dt>
<dd><p>This class is used to interact with the Log API</p>
</dd>
<dt><a href="#Login">Login</a></dt>
<dd><p>This class is used to interact with the Login API</p>
</dd>
<dt><a href="#MISP">MISP</a></dt>
<dd><p>This class is used to interact with the MISP API</p>
</dd>
<dt><a href="#Observable">Observable</a></dt>
<dd><p>This class is used to interact with the observable API</p>
</dd>
<dt><a href="#ObservableType">ObservableType</a></dt>
<dd><p>This class is used to interact with the ObservableType API</p>
</dd>
<dt><a href="#Organisation">Organisation</a></dt>
<dd><p>This class is used to interact with the Organisation API</p>
</dd>
<dt><a href="#Page">Page</a></dt>
<dd><p>This class is used to interact with the page API</p>
</dd>
<dt><a href="#PageTemplate">PageTemplate</a></dt>
<dd><p>This class is used to interact with the PageTemplate API</p>
</dd>
<dt><a href="#Profile">Profile</a></dt>
<dd><p>This class is used to interact with the Profile API</p>
</dd>
<dt><a href="#Share">Share</a></dt>
<dd><p>This class is used to interact with the share API</p>
</dd>
<dt><a href="#Status">Status</a></dt>
<dd><p>This class is used to interact with the Status API</p>
</dd>
<dt><a href="#TaskLog">TaskLog</a></dt>
<dd><p>This class is used to interact with the task-log API</p>
</dd>
<dt><a href="#Task">Task</a></dt>
<dd><p>This class is used to interact with the Task API</p>
</dd>
<dt><a href="#Taxonomy">Taxonomy</a></dt>
<dd><p>This class is used to interact with the Taxonomy API</p>
</dd>
<dt><a href="#Timeline">Timeline</a></dt>
<dd><p>This class is used to interact with the timeline API</p>
</dd>
<dt><a href="#TOTP">TOTP</a></dt>
<dd><p>This class is used to interact with the TOTP API</p>
</dd>
<dt><a href="#Ttp">Ttp</a></dt>
<dd><p>This class is used to interact with the ttp API</p>
</dd>
<dt><a href="#User">User</a></dt>
<dd><p>This class is used to interact with the User API</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#query">query(query)</a></dt>
<dd><p>A function to execute a query on thehive</p>
</dd>
</dl>

<a name="Admin"></a>

## Admin
This class is used to interact with the Admin API

**Kind**: global class  

* [Admin](#Admin)
    * [.updateLogsLevel(packageName, level)](#Admin+updateLogsLevel) ⇒ <code>Promise</code>
    * [.triggerChecks()](#Admin+triggerChecks) ⇒ <code>Promise</code>
    * [.triggerCheck(name)](#Admin+triggerCheck) ⇒ <code>Promise</code>
    * [.triggerCheckGlobal(name)](#Admin+triggerCheckGlobal) ⇒ <code>Promise</code>
    * [.triggerCheckDedup(name)](#Admin+triggerCheckDedup) ⇒ <code>Promise</code>
    * [.triggerCheckCancel()](#Admin+triggerCheckCancel) ⇒ <code>Promise</code>
    * [.getCheckStats()](#Admin+getCheckStats) ⇒ <code>Promise</code>
    * [.getIndexStatus()](#Admin+getIndexStatus) ⇒ <code>Promise</code>
    * [.reindexData(name)](#Admin+reindexData) ⇒ <code>Promise</code>
    * [.rebuildIndex(name)](#Admin+rebuildIndex) ⇒ <code>Promise</code>
    * [.repairSchema(name, select, filter)](#Admin+repairSchema) ⇒ <code>Promise</code>
    * [.schemainfos(name, select, filter)](#Admin+schemainfos) ⇒ <code>Promise</code>

<a name="Admin+updateLogsLevel"></a>

### admin.updateLogsLevel(packageName, level) ⇒ <code>Promise</code>
Update logs level

**Kind**: instance method of [<code>Admin</code>](#Admin)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| packageName | <code>string</code> | The name of the package to update |
| level | <code>string</code> | The level to set |

<a name="Admin+triggerChecks"></a>

### admin.triggerChecks() ⇒ <code>Promise</code>
Trigger all checks

**Kind**: instance method of [<code>Admin</code>](#Admin)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="Admin+triggerCheck"></a>

### admin.triggerCheck(name) ⇒ <code>Promise</code>
Trigger integrity check

**Kind**: instance method of [<code>Admin</code>](#Admin)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of check to trigger |

<a name="Admin+triggerCheckGlobal"></a>

### admin.triggerCheckGlobal(name) ⇒ <code>Promise</code>
Trigger integrity check global

**Kind**: instance method of [<code>Admin</code>](#Admin)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of check to trigger |

<a name="Admin+triggerCheckDedup"></a>

### admin.triggerCheckDedup(name) ⇒ <code>Promise</code>
Trigger integrity check dedup

**Kind**: instance method of [<code>Admin</code>](#Admin)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of check to trigger |

<a name="Admin+triggerCheckCancel"></a>

### admin.triggerCheckCancel() ⇒ <code>Promise</code>
Trigger integrity check cancel

**Kind**: instance method of [<code>Admin</code>](#Admin)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="Admin+getCheckStats"></a>

### admin.getCheckStats() ⇒ <code>Promise</code>
Get check stats

**Kind**: instance method of [<code>Admin</code>](#Admin)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="Admin+getIndexStatus"></a>

### admin.getIndexStatus() ⇒ <code>Promise</code>
Get Index status

**Kind**: instance method of [<code>Admin</code>](#Admin)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="Admin+reindexData"></a>

### admin.reindexData(name) ⇒ <code>Promise</code>
Reindex data

**Kind**: instance method of [<code>Admin</code>](#Admin)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the index to reindex |

<a name="Admin+rebuildIndex"></a>

### admin.rebuildIndex(name) ⇒ <code>Promise</code>
Rebuild index

**Kind**: instance method of [<code>Admin</code>](#Admin)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the index to rebuild |

<a name="Admin+repairSchema"></a>

### admin.repairSchema(name, select, filter) ⇒ <code>Promise</code>
Repair schema

**Kind**: instance method of [<code>Admin</code>](#Admin)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the index to repair |
| select | <code>string</code> | The select to use |
| filter | <code>string</code> | The filter to use |

<a name="Admin+schemainfos"></a>

### admin.schemainfos(name, select, filter) ⇒ <code>Promise</code>
Schema info

**Kind**: instance method of [<code>Admin</code>](#Admin)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the index to repair |
| select | <code>string</code> | The select to use |
| filter | <code>string</code> | The filter to use |

<a name="Alert"></a>

## Alert
Alert class to manage alerts

**Kind**: global class  

* [Alert](#Alert)
    * [.create(type, source, sourceRef, externalLink, title, description, severity, date, tags, flag, tlp, pap, customFields, summary, assignee, caseTemplate, observables, procedures)](#Alert+create) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.get(id)](#Alert+get) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.delete(id)](#Alert+delete) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.update(alertId, type, source, sourceRef, externalLink, title, description, severity, date, lastSyncDate, tags, flag, tlp, pap, follow, customFields, summary, assignee, status, addTags, removeTags)](#Alert+update) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.bulkupdate(alertIds, type, source, sourceRef, externalLink, title, description, severity, date, lastSyncDate, tags, tlp, pap, follow, customFields, summary, assignee, status, addTags, removeTags)](#Alert+bulkupdate) ⇒ <code>Promise</code>
    * [.createCaseFromAlert(alertId, title, description, severity, startDate, endDate, tags, flag, tlp, pap, status, summary, assignee, customFields, caseTemplate, tasks, pages, sharingParameters, taskRule, observableRule)](#Alert+createCaseFromAlert) ⇒ <code>Promise</code>
    * [.followAlert(alertId)](#Alert+followAlert) ⇒ <code>Promise</code>
    * [.unfollowAlert(alertId)](#Alert+unfollowAlert) ⇒ <code>Promise</code>
    * [.mergeAlert(alertId, caseId)](#Alert+mergeAlert) ⇒ <code>Promise</code>
    * [.mergeAlerts(caseId, alertIds)](#Alert+mergeAlerts) ⇒ <code>Promise</code>
    * [.deleteAlerts(alertIds)](#Alert+deleteAlerts) ⇒ <code>Promise</code>

<a name="Alert+create"></a>

### alert.create(type, source, sourceRef, externalLink, title, description, severity, date, tags, flag, tlp, pap, customFields, summary, assignee, caseTemplate, observables, procedures) ⇒ <code>Promise.&lt;object&gt;</code>
Create a new alert

**Kind**: instance method of [<code>Alert</code>](#Alert)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - The response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> |  | The type of the alert |
| source | <code>string</code> |  | The source of the alert |
| sourceRef | <code>string</code> |  | The sourceRef of the alert |
| externalLink | <code>string</code> | <code>null</code> | The externalLink of the alert |
| title | <code>string</code> |  | The title of the alert |
| description | <code>string</code> |  | The description of the alert |
| severity | <code>number</code> | <code>2</code> | The severity of the alert |
| date | <code>number</code> |  | The date of the alert |
| tags | <code>Array.&lt;string&gt;</code> |  | The tags of the alert |
| flag | <code>boolean</code> | <code>false</code> | The flag of the alert |
| tlp | <code>number</code> | <code>2</code> | The tlp of the alert |
| pap | <code>number</code> | <code>2</code> | The pap of the alert |
| customFields | <code>Array.&lt;object&gt;</code> |  | The customFields of the alert |
| summary | <code>string</code> | <code>null</code> | The summary of the alert |
| assignee | <code>string</code> | <code>null</code> | The assignee of the alert |
| caseTemplate | <code>string</code> | <code>null</code> | The caseTemplate of the alert |
| observables | <code>Array.&lt;object&gt;</code> |  | The observables of the alert |
| procedures | <code>Array.&lt;object&gt;</code> |  | The procedures of the alert |

<a name="Alert+get"></a>

### alert.get(id) ⇒ <code>Promise.&lt;object&gt;</code>
Get an alert

**Kind**: instance method of [<code>Alert</code>](#Alert)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - The response  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the alert |

<a name="Alert+delete"></a>

### alert.delete(id) ⇒ <code>Promise.&lt;object&gt;</code>
Delete an alert

**Kind**: instance method of [<code>Alert</code>](#Alert)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - The response  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the alert |

<a name="Alert+update"></a>

### alert.update(alertId, type, source, sourceRef, externalLink, title, description, severity, date, lastSyncDate, tags, flag, tlp, pap, follow, customFields, summary, assignee, status, addTags, removeTags) ⇒ <code>Promise.&lt;object&gt;</code>
Update an alert

**Kind**: instance method of [<code>Alert</code>](#Alert)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - The response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| alertId | <code>string</code> |  | The id of the alert |
| type | <code>string</code> | <code>null</code> | The type of the alert |
| source | <code>string</code> | <code>null</code> | The source of the alert |
| sourceRef | <code>string</code> | <code>null</code> | The sourceRef of the alert |
| externalLink | <code>string</code> | <code>null</code> | The externalLink of the alert |
| title | <code>string</code> | <code>null</code> | The title of the alert |
| description | <code>string</code> | <code>null</code> | The description of the alert |
| severity | <code>number</code> | <code></code> | The severity of the alert |
| date | <code>number</code> | <code></code> | The date of the alert |
| lastSyncDate | <code>number</code> | <code></code> | The lastSyncDate of the alert |
| tags | <code>Array.&lt;string&gt;</code> | <code></code> | The tags of the alert |
| flag | <code>boolean</code> |  | The flag of the alert |
| tlp | <code>number</code> |  | The tlp of the alert |
| pap | <code>number</code> |  | The pap of the alert |
| follow | <code>boolean</code> |  | The follow of the alert |
| customFields | <code>object</code> |  | The customFields of the alert |
| summary | <code>string</code> |  | The summary of the alert |
| assignee | <code>string</code> |  | The assignee of the alert |
| status | <code>string</code> |  | The status of the alert |
| addTags | <code>Array.&lt;string&gt;</code> |  | The addTags of the alert |
| removeTags | <code>Array.&lt;string&gt;</code> |  | The removeTags of the alert |

<a name="Alert+bulkupdate"></a>

### alert.bulkupdate(alertIds, type, source, sourceRef, externalLink, title, description, severity, date, lastSyncDate, tags, tlp, pap, follow, customFields, summary, assignee, status, addTags, removeTags) ⇒ <code>Promise</code>
Bulk update alerts

**Kind**: instance method of [<code>Alert</code>](#Alert)  
**Returns**: <code>Promise</code> - - A promise which resolves to the response body  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| alertIds | <code>Array</code> |  | An array of alert ids to update |
| type | <code>String</code> | <code></code> | The type of the alert |
| source | <code>String</code> | <code></code> | The source of the alert |
| sourceRef | <code>String</code> | <code></code> | The source reference of the alert |
| externalLink | <code>String</code> | <code></code> | The external link of the alert |
| title | <code>String</code> | <code></code> | The title of the alert |
| description | <code>String</code> | <code></code> | The description of the alert |
| severity | <code>Number</code> | <code></code> | The severity of the alert |
| date | <code>Number</code> | <code></code> | The date of the alert |
| lastSyncDate | <code>Number</code> | <code></code> | The last sync date of the alert |
| tags | <code>Array</code> | <code></code> | The tags of the alert |
| tlp | <code>Number</code> | <code></code> | The TLP of the alert |
| pap | <code>Number</code> | <code></code> | The PAP of the alert |
| follow | <code>Boolean</code> | <code></code> | The follow status of the alert |
| customFields | <code>Object</code> | <code></code> | The custom fields of the alert |
| summary | <code>String</code> | <code></code> | The summary of the alert |
| assignee | <code>String</code> | <code></code> | The assignee of the alert |
| status | <code>String</code> | <code></code> | The status of the alert |
| addTags | <code>Array</code> | <code></code> | The tags to add to the alert |
| removeTags | <code>Array</code> | <code></code> | The tags to remove from the alert |

<a name="Alert+createCaseFromAlert"></a>

### alert.createCaseFromAlert(alertId, title, description, severity, startDate, endDate, tags, flag, tlp, pap, status, summary, assignee, customFields, caseTemplate, tasks, pages, sharingParameters, taskRule, observableRule) ⇒ <code>Promise</code>
Create a case from an alert

**Kind**: instance method of [<code>Alert</code>](#Alert)  
**Returns**: <code>Promise</code> - - A promise which resolves to the response body  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| alertId | <code>String</code> |  | The id of the alert to create the case from |
| title | <code>String</code> | <code></code> | The title of the case |
| description | <code>String</code> | <code></code> | The description of the case |
| severity | <code>Number</code> | <code></code> | The severity of the case |
| startDate | <code>Number</code> | <code></code> | The start date of the case |
| endDate | <code>Number</code> | <code></code> | The end date of the case |
| tags | <code>Array</code> | <code></code> | The tags of the case |
| flag | <code>String</code> | <code></code> | The flag of the case |
| tlp | <code>Number</code> | <code></code> | The TLP of the case |
| pap | <code>Number</code> | <code></code> | The PAP of the case |
| status | <code>String</code> | <code></code> | The status of the case |
| summary | <code>String</code> | <code></code> | The summary of the case |
| assignee | <code>String</code> | <code></code> | The assignee of the case |
| customFields | <code>Object</code> | <code></code> | The custom fields of the case |
| caseTemplate | <code>String</code> | <code></code> | The case template of the case |
| tasks | <code>Array</code> | <code></code> | The tasks of the case |
| pages | <code>Array</code> | <code></code> | The pages of the case |
| sharingParameters | <code>Array</code> | <code></code> | The sharing parameters of the case |
| taskRule | <code>String</code> | <code></code> | The task rule of the case |
| observableRule | <code>String</code> | <code></code> | The observable rule of the case |

<a name="Alert+followAlert"></a>

### alert.followAlert(alertId) ⇒ <code>Promise</code>
Follow an alert

**Kind**: instance method of [<code>Alert</code>](#Alert)  
**Returns**: <code>Promise</code> - - A promise which resolves to the response body  

| Param | Type | Description |
| --- | --- | --- |
| alertId | <code>String</code> | The id of the alert to follow |

<a name="Alert+unfollowAlert"></a>

### alert.unfollowAlert(alertId) ⇒ <code>Promise</code>
Unfollow an alert

**Kind**: instance method of [<code>Alert</code>](#Alert)  
**Returns**: <code>Promise</code> - - A promise which resolves to the response body  

| Param | Type | Description |
| --- | --- | --- |
| alertId | <code>String</code> | The id of the alert to unfollow |

<a name="Alert+mergeAlert"></a>

### alert.mergeAlert(alertId, caseId) ⇒ <code>Promise</code>
Merge an alert with a case

**Kind**: instance method of [<code>Alert</code>](#Alert)  
**Returns**: <code>Promise</code> - - A promise which resolves to the response body  

| Param | Type | Description |
| --- | --- | --- |
| alertId | <code>String</code> | The id of the alert to merge |
| caseId | <code>String</code> | The id of the case to merge |

<a name="Alert+mergeAlerts"></a>

### alert.mergeAlerts(caseId, alertIds) ⇒ <code>Promise</code>
Merge multiple alerts with a case

**Kind**: instance method of [<code>Alert</code>](#Alert)  
**Returns**: <code>Promise</code> - - A promise which resolves to the response body  

| Param | Type | Description |
| --- | --- | --- |
| caseId | <code>String</code> | The id of the case to merge |
| alertIds | <code>Array</code> | The ids of the alerts to merge |

<a name="Alert+deleteAlerts"></a>

### alert.deleteAlerts(alertIds) ⇒ <code>Promise</code>
Delete an alert in bulk

**Kind**: instance method of [<code>Alert</code>](#Alert)  
**Returns**: <code>Promise</code> - - A promise which resolves to the response body  

| Param | Type | Description |
| --- | --- | --- |
| alertIds | <code>Array</code> | The ids of the alerts to delete |

<a name="Alertstatus"></a>

## Alertstatus
This class is used to interact with the alertstatus API

**Kind**: global class  
<a name="Attack"></a>

## Attack
This class is used to interact with the Attack API

**Kind**: global class  
<a name="CaseReport"></a>

## CaseReport
This class is used to interact with the case-report API

**Kind**: global class  
<a name="Case"></a>

## Case
This class is used to interact with the case API

**Kind**: global class  

* [Case](#Case)
    * [.create(title, description, severity, startDate, endDate, tags, flag, tlp, pap, status, summary, assignee, customFields, caseTemplate, tasks, pages, sharingParameters, taskRule, observableRule)](#Case+create) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.get(id)](#Case+get) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.delete(id)](#Case+delete) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.update(id, title, description, severity, startDate, endDate, tags, flag, tlp, pap, status, summary, assignee, impactStatus, customFields, taskRule, observableRule, addTags, removeTags)](#Case+update) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.bulkUpdate(ids, title, description, severity, startDate, endDate, tags, flag, tlp, pap, status, summary, assignee, impactStatus, customFields, taskRule, observableRule, addTags, removeTags)](#Case+bulkUpdate) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.merge(id)](#Case+merge) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.unlinkAlert(id, alertId)](#Case+unlinkAlert) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.mergeSimilarObservables(id)](#Case+mergeSimilarObservables) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.getLinkedCases(id)](#Case+getLinkedCases) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.deleteCustomField(id)](#Case+deleteCustomField) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.importCaseFromFile(_jsonFile, file)](#Case+importCaseFromFile)
    * [.exportCaseAsArchive(id, archivePassword)](#Case+exportCaseAsArchive)
    * [.ApplyCaseTemplateOnExistingCase(id, caseTemplate, updateTitlePrefix, updateDescription, updateTags, updateSeverity, updateFlag, updateTlp, updatePap, updateCustomFields, importTasks, importPages)](#Case+ApplyCaseTemplateOnExistingCase) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.changeCaseOwningOrg(id, organisation, keepProfile, taskRule, observableRule)](#Case+changeCaseOwningOrg) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.getCaseTimeline(id)](#Case+getCaseTimeline) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.addAttachmentToCase(id, attachments, canRename)](#Case+addAttachmentToCase)
    * [.downloadAttachment(id, attachmentId)](#Case+downloadAttachment) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.getAttachmentFromCase(id, attachmentId)](#Case+getAttachmentFromCase) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.deleteAttachmentFromCase(id, attachmentId)](#Case+deleteAttachmentFromCase) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.listSharesOfCase(id)](#Case+listSharesOfCase) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.setSharesOfCase(id, shares)](#Case+setSharesOfCase) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.shareACase(id, shares)](#Case+shareACase) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.unshareACase(id, shares)](#Case+unshareACase) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.removeShareFromCase(id)](#Case+removeShareFromCase) ⇒ <code>Promise.&lt;object&gt;</code>

<a name="Case+create"></a>

### case.create(title, description, severity, startDate, endDate, tags, flag, tlp, pap, status, summary, assignee, customFields, caseTemplate, tasks, pages, sharingParameters, taskRule, observableRule) ⇒ <code>Promise.&lt;object&gt;</code>
This function is used to create a new case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response of the request  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| title | <code>string</code> |  | The title of the case |
| description | <code>string</code> |  | The description of the case |
| severity | <code>number</code> | <code>2</code> | The severity of the case |
| startDate | <code>number</code> |  | The start date of the case |
| endDate | <code>number</code> | <code></code> | The end date of the case |
| tags | <code>Array.&lt;string&gt;</code> |  | The tags of the case |
| flag | <code>boolean</code> | <code>false</code> | The flag of the case |
| tlp | <code>number</code> | <code>2</code> | The tlp of the case |
| pap | <code>number</code> | <code>2</code> | The pap of the case |
| status | <code>string</code> | <code>&quot;New&quot;</code> | The status of the case |
| summary | <code>string</code> |  | The summary of the case |
| assignee | <code>string</code> |  | The assignee of the case |
| customFields | <code>Array.&lt;object&gt;</code> |  | The custom fields of the case |
| caseTemplate | <code>string</code> |  | The case template of the case |
| tasks | <code>Array.&lt;object&gt;</code> |  | The tasks of the case |
| pages | <code>Array.&lt;object&gt;</code> |  | The pages of the case |
| sharingParameters | <code>Array.&lt;object&gt;</code> |  | The sharing parameters of the case |
| taskRule | <code>string</code> |  | The task rule of the case |
| observableRule | <code>string</code> |  | The observable rule of the case |

<a name="Case+get"></a>

### case.get(id) ⇒ <code>Promise.&lt;object&gt;</code>
This function is used to get a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |

<a name="Case+delete"></a>

### case.delete(id) ⇒ <code>Promise.&lt;object&gt;</code>
This function is used to delete a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |

<a name="Case+update"></a>

### case.update(id, title, description, severity, startDate, endDate, tags, flag, tlp, pap, status, summary, assignee, impactStatus, customFields, taskRule, observableRule, addTags, removeTags) ⇒ <code>Promise.&lt;object&gt;</code>
This function is used to update a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response of the request  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | The id of the case |
| title | <code>string</code> |  | The title of the case |
| description | <code>string</code> |  | The description of the case |
| severity | <code>number</code> | <code>2</code> | The severity of the case |
| startDate | <code>number</code> |  | The start date of the case |
| endDate | <code>number</code> | <code></code> | The end date of the case |
| tags | <code>Array.&lt;string&gt;</code> |  | The tags of the case |
| flag | <code>boolean</code> | <code>false</code> | The flag of the case |
| tlp | <code>number</code> | <code>2</code> | The tlp of the case |
| pap | <code>number</code> | <code>2</code> | The pap of the case |
| status | <code>string</code> | <code>&quot;New&quot;</code> | The status of the case |
| summary | <code>string</code> |  | The summary of the case |
| assignee | <code>string</code> |  | The assignee of the case |
| impactStatus | <code>string</code> |  | The impact status of the case |
| customFields | <code>Array.&lt;object&gt;</code> |  | The custom fields of the case |
| taskRule | <code>string</code> |  | The task rule of the case |
| observableRule | <code>string</code> |  | The observable rule of the case |
| addTags | <code>Array.&lt;string&gt;</code> |  | The tags to add to the case |
| removeTags | <code>Array.&lt;string&gt;</code> |  | The tags to remove from the case |

<a name="Case+bulkUpdate"></a>

### case.bulkUpdate(ids, title, description, severity, startDate, endDate, tags, flag, tlp, pap, status, summary, assignee, impactStatus, customFields, taskRule, observableRule, addTags, removeTags) ⇒ <code>Promise.&lt;object&gt;</code>
Bulk update cases

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ids | <code>Array.&lt;string&gt;</code> |  | The ids of the cases to update |
| title | <code>string</code> |  | The title of the case |
| description | <code>string</code> |  | The description of the case |
| severity | <code>number</code> | <code>2</code> | The severity of the case |
| startDate | <code>number</code> |  | The start date of the case |
| endDate | <code>number</code> | <code></code> | The end date of the case |
| tags | <code>Array.&lt;string&gt;</code> |  | The tags of the case |
| flag | <code>boolean</code> | <code>false</code> | The flag of the case |
| tlp | <code>number</code> | <code>2</code> | The tlp of the case |
| pap | <code>number</code> | <code>2</code> | The pap of the case |
| status | <code>string</code> | <code>&quot;New&quot;</code> | The status of the case |
| summary | <code>string</code> |  | The summary of the case |
| assignee | <code>string</code> |  | The assignee of the case |
| impactStatus | <code>string</code> |  | The impact status of the case |
| customFields | <code>Array.&lt;object&gt;</code> |  | The custom fields of the case |
| taskRule | <code>string</code> |  | The task rule of the case |
| observableRule | <code>string</code> |  | The observable rule of the case |
| addTags | <code>Array.&lt;string&gt;</code> |  | The tags to add to the case |
| removeTags | <code>Array.&lt;string&gt;</code> |  | The tags to remove from the case |

<a name="Case+merge"></a>

### case.merge(id) ⇒ <code>Promise.&lt;object&gt;</code>
merge cases

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |

<a name="Case+unlinkAlert"></a>

### case.unlinkAlert(id, alertId) ⇒ <code>Promise.&lt;object&gt;</code>
unlink an alert from a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |
| alertId | <code>string</code> | The id of the alert |

<a name="Case+mergeSimilarObservables"></a>

### case.mergeSimilarObservables(id) ⇒ <code>Promise.&lt;object&gt;</code>
merge similar observables in a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |

<a name="Case+getLinkedCases"></a>

### case.getLinkedCases(id) ⇒ <code>Promise.&lt;object&gt;</code>
get the linked cases of a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |

<a name="Case+deleteCustomField"></a>

### case.deleteCustomField(id) ⇒ <code>Promise.&lt;object&gt;</code>
delete a custom field

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the custom field |

<a name="Case+importCaseFromFile"></a>

### case.importCaseFromFile(_jsonFile, file)
import a new case from a file

**Kind**: instance method of [<code>Case</code>](#Case)  

| Param | Type | Description |
| --- | --- | --- |
| _jsonFile | <code>string</code> | The json file of the case |
| file | <code>string</code> | The file of the case |

<a name="Case+exportCaseAsArchive"></a>

### case.exportCaseAsArchive(id, archivePassword)
export a case as an archive

**Kind**: instance method of [<code>Case</code>](#Case)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |
| archivePassword | <code>string</code> | The password of the archive (default: alice) |

<a name="Case+ApplyCaseTemplateOnExistingCase"></a>

### case.ApplyCaseTemplateOnExistingCase(id, caseTemplate, updateTitlePrefix, updateDescription, updateTags, updateSeverity, updateFlag, updateTlp, updatePap, updateCustomFields, importTasks, importPages) ⇒ <code>Promise.&lt;object&gt;</code>
apply a case template on an existing case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |
| caseTemplate | <code>string</code> | The case template |
| updateTitlePrefix | <code>boolean</code> | Update the title prefix |
| updateDescription | <code>boolean</code> | Update the description |
| updateTags | <code>boolean</code> | Update the tags |
| updateSeverity | <code>boolean</code> | Update the severity |
| updateFlag | <code>boolean</code> | Update the flag |
| updateTlp | <code>boolean</code> | Update the tlp |
| updatePap | <code>boolean</code> | Update the pap |
| updateCustomFields | <code>boolean</code> | Update the custom fields |
| importTasks | <code>boolean</code> | Import the tasks |
| importPages | <code>boolean</code> | Import the pages |

<a name="Case+changeCaseOwningOrg"></a>

### case.changeCaseOwningOrg(id, organisation, keepProfile, taskRule, observableRule) ⇒ <code>Promise.&lt;object&gt;</code>
change the owning org of a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |
| organisation | <code>string</code> | The organisation |
| keepProfile | <code>string</code> | Keep the profile |
| taskRule | <code>string</code> | The task rule |
| observableRule | <code>string</code> | The observable rule |

<a name="Case+getCaseTimeline"></a>

### case.getCaseTimeline(id) ⇒ <code>Promise.&lt;object&gt;</code>
get the timeline of a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |

<a name="Case+addAttachmentToCase"></a>

### case.addAttachmentToCase(id, attachments, canRename)
add new attachments to a case

**Kind**: instance method of [<code>Case</code>](#Case)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |
| attachments | <code>Array.&lt;any&gt;</code> | The attachments to add |
| canRename | <code>boolean</code> | Can rename (if the attachment already exists) |

<a name="Case+downloadAttachment"></a>

### case.downloadAttachment(id, attachmentId) ⇒ <code>Promise.&lt;object&gt;</code>
get an attachment from a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |
| attachmentId | <code>string</code> | The id of the attachment |

<a name="Case+getAttachmentFromCase"></a>

### case.getAttachmentFromCase(id, attachmentId) ⇒ <code>Promise.&lt;object&gt;</code>
get an attachment from a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |
| attachmentId | <code>string</code> | The id of the attachment |

<a name="Case+deleteAttachmentFromCase"></a>

### case.deleteAttachmentFromCase(id, attachmentId) ⇒ <code>Promise.&lt;object&gt;</code>
delete an attachment from a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |
| attachmentId | <code>string</code> | The id of the attachment |

<a name="Case+listSharesOfCase"></a>

### case.listSharesOfCase(id) ⇒ <code>Promise.&lt;object&gt;</code>
get the shares of a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |

<a name="Case+setSharesOfCase"></a>

### case.setSharesOfCase(id, shares) ⇒ <code>Promise.&lt;object&gt;</code>
set the shares of a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |
| shares | <code>Array.&lt;object&gt;</code> | The shares |

<a name="Case+shareACase"></a>

### case.shareACase(id, shares) ⇒ <code>Promise.&lt;object&gt;</code>
share a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |
| shares | <code>Array.&lt;object&gt;</code> | The shares |

<a name="Case+unshareACase"></a>

### case.unshareACase(id, shares) ⇒ <code>Promise.&lt;object&gt;</code>
unshare a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |
| shares | <code>Array.&lt;object&gt;</code> | The shares |

<a name="Case+removeShareFromCase"></a>

### case.removeShareFromCase(id) ⇒ <code>Promise.&lt;object&gt;</code>
get the shares of a case

**Kind**: instance method of [<code>Case</code>](#Case)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response body  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case |

<a name="CaseReportTemplate"></a>

## CaseReportTemplate
This class is used to interact with the CaseReportTemplate API

**Kind**: global class  
<a name="Casestatus"></a>

## Casestatus
This class is used to interact with the casestatus API

**Kind**: global class  
<a name="CaseTemplate"></a>

## CaseTemplate
This class is used to interact with the CaseTemplate API

**Kind**: global class  
<a name="Comment"></a>

## Comment
This class is used to interact with the comment API

**Kind**: global class  
<a name="Cortex"></a>

## Cortex
This class is used to interact with the Cortex API

**Kind**: global class  
<a name="Customfield"></a>

## Customfield
This class is used to interact with the customfield API

**Kind**: global class  
<a name="Dashboard"></a>

## Dashboard
This class is used to interact with the Dashboard API

**Kind**: global class  

* [Dashboard](#Dashboard)
    * [.createDashboard(title, group, description, status, definition, version)](#Dashboard+createDashboard) ⇒ <code>Promise</code>
    * [.getDashboard(id)](#Dashboard+getDashboard) ⇒ <code>Promise</code>
    * [.deleteDashboard(id)](#Dashboard+deleteDashboard) ⇒ <code>Promise</code>
    * [.updateDashboard(dashboardId, title, group, description, definition, status, version)](#Dashboard+updateDashboard) ⇒ <code>Promise</code>
    * [.changeOwner(dashboardId, userId)](#Dashboard+changeOwner)

<a name="Dashboard+createDashboard"></a>

### dashboard.createDashboard(title, group, description, status, definition, version) ⇒ <code>Promise</code>
Create a dashboard

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| title | <code>string</code> |  | The title of the dashboard |
| group | <code>string</code> | <code>null</code> | The group of the dashboard |
| description | <code>string</code> |  | The description of the dashboard |
| status | <code>string</code> |  | The status of the dashboard |
| definition | <code>string</code> |  | The definition of the dashboard |
| version | <code>number</code> | <code>1</code> | The version of the dashboard |

<a name="Dashboard+getDashboard"></a>

### dashboard.getDashboard(id) ⇒ <code>Promise</code>
Get a dashboard

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the dashboard |

<a name="Dashboard+deleteDashboard"></a>

### dashboard.deleteDashboard(id) ⇒ <code>Promise</code>
delete a dashboard

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the dashboard |

<a name="Dashboard+updateDashboard"></a>

### dashboard.updateDashboard(dashboardId, title, group, description, definition, status, version) ⇒ <code>Promise</code>
Update a dashboard

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dashboardId | <code>string</code> |  | The id of the dashboard |
| title | <code>string</code> | <code>null</code> | The title of the dashboard |
| group | <code>string</code> | <code>null</code> | The group of the dashboard |
| description | <code>string</code> | <code>null</code> | The description of the dashboard |
| definition | <code>string</code> | <code>null</code> | The definition of the dashboard |
| status | <code>string</code> | <code>null</code> | The status of the dashboard |
| version | <code>number</code> | <code></code> | The version of the dashboard |

<a name="Dashboard+changeOwner"></a>

### dashboard.changeOwner(dashboardId, userId)
Change dashboard owner

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| dashboardId | <code>string</code> | The id of the dashboard |
| userId | <code>string</code> | The id of the user |

<a name="Describe"></a>

## Describe
This class is used to interact with the Describe API

**Kind**: global class  
<a name="Function"></a>

## Function
This class is used to interact with the function API

**Kind**: global class  
<a name="License"></a>

## License
This class is used to interact with the license API

**Kind**: global class  
<a name="Log"></a>

## Log
This class is used to interact with the Log API

**Kind**: global class  
<a name="Login"></a>

## Login
This class is used to interact with the Login API

**Kind**: global class  
<a name="MISP"></a>

## MISP
This class is used to interact with the MISP API

**Kind**: global class  
<a name="Observable"></a>

## Observable
This class is used to interact with the observable API

**Kind**: global class  
<a name="ObservableType"></a>

## ObservableType
This class is used to interact with the ObservableType API

**Kind**: global class  
<a name="Organisation"></a>

## Organisation
This class is used to interact with the Organisation API

**Kind**: global class  
<a name="Page"></a>

## Page
This class is used to interact with the page API

**Kind**: global class  
<a name="PageTemplate"></a>

## PageTemplate
This class is used to interact with the PageTemplate API

**Kind**: global class  
<a name="Profile"></a>

## Profile
This class is used to interact with the Profile API

**Kind**: global class  
<a name="Share"></a>

## Share
This class is used to interact with the share API

**Kind**: global class  
<a name="Status"></a>

## Status
This class is used to interact with the Status API

**Kind**: global class  
<a name="TaskLog"></a>

## TaskLog
This class is used to interact with the task-log API

**Kind**: global class  
<a name="Task"></a>

## Task
This class is used to interact with the Task API

**Kind**: global class  

* [Task](#Task)
    * [.createTaskInCase(caseId, title, group, description, status, flag, startDate, endDate, order, dueDate, assignee, mandatory)](#Task+createTaskInCase) ⇒ <code>Promise</code>
    * [.getTask(taskId)](#Task+getTask) ⇒ <code>Promise</code>
    * [.deleteTask(taskId)](#Task+deleteTask) ⇒ <code>Promise</code>
    * [.updateTask(taskId, title, group, description, status, flag, startDate, endDate, order, dueDate, assignee, mandatory)](#Task+updateTask) ⇒ <code>Promise</code>
    * [.bulkUpdateTask(taskIds, title, group, description, status, flag, startDate, endDate, order, dueDate, assignee, mandatory)](#Task+bulkUpdateTask) ⇒ <code>Promise</code>
    * [.taskAsctionRequired(taskId)](#Task+taskAsctionRequired) ⇒ <code>Promise</code>
    * [.setTaskActionRequired(taskId, orgId)](#Task+setTaskActionRequired)
    * [.setTaskActionDone(taskId, orgId)](#Task+setTaskActionDone)
    * [.listSharesOfTask(taskId)](#Task+listSharesOfTask)
    * [.shareTask(taskId, orgId)](#Task+shareTask)
    * [.unshareTask(taskId, orgId)](#Task+unshareTask)

<a name="Task+createTaskInCase"></a>

### task.createTaskInCase(caseId, title, group, description, status, flag, startDate, endDate, order, dueDate, assignee, mandatory) ⇒ <code>Promise</code>
Create a new task in a case

**Kind**: instance method of [<code>Task</code>](#Task)  
**Returns**: <code>Promise</code> - - A promise that will resolve with the response body  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| caseId | <code>string</code> |  | The case ID |
| title | <code>string</code> |  | The title of the task |
| group | <code>string</code> | <code>null</code> | The group of the task |
| description | <code>string</code> | <code>null</code> | The description of the task |
| status | <code>string</code> | <code>null</code> | The status of the task |
| flag | <code>boolean</code> | <code></code> | The flag of the task |
| startDate | <code>string</code> | <code>null</code> | The start date of the task |
| endDate | <code>string</code> | <code>null</code> | The end date of the task |
| order | <code>number</code> | <code></code> | The order of the task |
| dueDate | <code>string</code> | <code>null</code> | The due date of the task |
| assignee | <code>string</code> | <code>null</code> | The assignee of the task |
| mandatory | <code>boolean</code> | <code></code> | The mandatory of the task |

<a name="Task+getTask"></a>

### task.getTask(taskId) ⇒ <code>Promise</code>
Get a task

**Kind**: instance method of [<code>Task</code>](#Task)  
**Returns**: <code>Promise</code> - - A promise that will resolve with the response body  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>string</code> | The task ID |

<a name="Task+deleteTask"></a>

### task.deleteTask(taskId) ⇒ <code>Promise</code>
Delete a task

**Kind**: instance method of [<code>Task</code>](#Task)  
**Returns**: <code>Promise</code> - - A promise that will resolve with the response body  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>string</code> | The task ID |

<a name="Task+updateTask"></a>

### task.updateTask(taskId, title, group, description, status, flag, startDate, endDate, order, dueDate, assignee, mandatory) ⇒ <code>Promise</code>
Update a task

**Kind**: instance method of [<code>Task</code>](#Task)  
**Returns**: <code>Promise</code> - - A promise that will resolve with the response body  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| taskId | <code>string</code> |  | The task ID |
| title | <code>string</code> | <code>null</code> | The title of the task |
| group | <code>string</code> | <code>null</code> | The group of the task |
| description | <code>string</code> | <code>null</code> | The description of the task |
| status | <code>string</code> | <code>null</code> | The status of the task |
| flag | <code>boolean</code> | <code></code> | The flag of the task |
| startDate | <code>string</code> | <code>null</code> | The start date of the task |
| endDate | <code>string</code> | <code>null</code> | The end date of the task |
| order | <code>number</code> | <code></code> | The order of the task |
| dueDate | <code>string</code> | <code>null</code> | The due date of the task |
| assignee | <code>string</code> | <code>null</code> | The assignee of the task |
| mandatory | <code>boolean</code> | <code></code> | The mandatory of the task |

<a name="Task+bulkUpdateTask"></a>

### task.bulkUpdateTask(taskIds, title, group, description, status, flag, startDate, endDate, order, dueDate, assignee, mandatory) ⇒ <code>Promise</code>
Bulk update tasks

**Kind**: instance method of [<code>Task</code>](#Task)  
**Returns**: <code>Promise</code> - - A promise that will resolve with the response body  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| taskIds | <code>Array.&lt;string&gt;</code> |  | The task IDs |
| title | <code>string</code> | <code>null</code> | The title of the task |
| group | <code>string</code> | <code>null</code> | The group of the task |
| description | <code>string</code> | <code>null</code> | The description of the task |
| status | <code>string</code> | <code>null</code> | The status of the task |
| flag | <code>boolean</code> | <code></code> | The flag of the task |
| startDate | <code>string</code> | <code>null</code> | The start date of the task |
| endDate | <code>string</code> | <code>null</code> | The end date of the task |
| order | <code>number</code> | <code></code> | The order of the task |
| dueDate | <code>string</code> | <code>null</code> | The due date of the task |
| assignee | <code>string</code> | <code>null</code> | The assignee of the task |
| mandatory | <code>boolean</code> | <code></code> | The mandatory of the task |

<a name="Task+taskAsctionRequired"></a>

### task.taskAsctionRequired(taskId) ⇒ <code>Promise</code>
Get the action required for a task

**Kind**: instance method of [<code>Task</code>](#Task)  
**Returns**: <code>Promise</code> - - A promise that will resolve with the response body  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>string</code> | The task ID |

<a name="Task+setTaskActionRequired"></a>

### task.setTaskActionRequired(taskId, orgId)
Set task action required

**Kind**: instance method of [<code>Task</code>](#Task)  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>string</code> | The task ID |
| orgId | <code>string</code> | The org ID |

<a name="Task+setTaskActionDone"></a>

### task.setTaskActionDone(taskId, orgId)
Set task action as done

**Kind**: instance method of [<code>Task</code>](#Task)  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>string</code> | The task ID |
| orgId | <code>string</code> | The org ID |

<a name="Task+listSharesOfTask"></a>

### task.listSharesOfTask(taskId)
List shares of task

**Kind**: instance method of [<code>Task</code>](#Task)  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>string</code> | The task ID |

<a name="Task+shareTask"></a>

### task.shareTask(taskId, orgId)
Share task

**Kind**: instance method of [<code>Task</code>](#Task)  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>string</code> | The task ID |
| orgId | <code>string</code> | The org ID |

<a name="Task+unshareTask"></a>

### task.unshareTask(taskId, orgId)
Unshare task

**Kind**: instance method of [<code>Task</code>](#Task)  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>string</code> | The task ID |
| orgId | <code>string</code> | The org ID |

<a name="Taxonomy"></a>

## Taxonomy
This class is used to interact with the Taxonomy API

**Kind**: global class  
<a name="Timeline"></a>

## Timeline
This class is used to interact with the timeline API

**Kind**: global class  
<a name="TOTP"></a>

## TOTP
This class is used to interact with the TOTP API

**Kind**: global class  

* [TOTP](#TOTP)
    * [.getSecret()](#TOTP+getSecret) ⇒ <code>Promise</code>
    * [.setSecret(code, secret)](#TOTP+setSecret) ⇒ <code>Promise</code>
    * [.unsetSecret()](#TOTP+unsetSecret) ⇒ <code>Promise</code>
    * [.unsetSecretForUser(user)](#TOTP+unsetSecretForUser) ⇒ <code>Promise</code>

<a name="TOTP+getSecret"></a>

### totP.getSecret() ⇒ <code>Promise</code>
Get TOTP secret

**Kind**: instance method of [<code>TOTP</code>](#TOTP)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="TOTP+setSecret"></a>

### totP.setSecret(code, secret) ⇒ <code>Promise</code>
Set TOTP secret

**Kind**: instance method of [<code>TOTP</code>](#TOTP)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> | The code to set the secret |
| secret | <code>string</code> | The secret to set |

<a name="TOTP+unsetSecret"></a>

### totP.unsetSecret() ⇒ <code>Promise</code>
Unset TOTP secret

**Kind**: instance method of [<code>TOTP</code>](#TOTP)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="TOTP+unsetSecretForUser"></a>

### totP.unsetSecretForUser(user) ⇒ <code>Promise</code>
Unset TOTP secret for user

**Kind**: instance method of [<code>TOTP</code>](#TOTP)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>string</code> | The email of userid of the user to unset the secret |

<a name="Ttp"></a>

## Ttp
This class is used to interact with the ttp API

**Kind**: global class  
<a name="User"></a>

## User
This class is used to interact with the User API

**Kind**: global class  
<a name="query"></a>

## query(query)
A function to execute a query on thehive

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | The query to execute |

