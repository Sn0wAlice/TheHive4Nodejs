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
<dd><p>This class is used to interact with the Att&amp;ck API</p>
</dd>
<dt><a href="#Audit">Audit</a></dt>
<dd><p>This class is used to interact with the Audit API</p>
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

* [Alertstatus](#Alertstatus)
    * [.create(value, stage, order, description, colour)](#Alertstatus+create) ⇒ <code>Promise</code>
    * [.delete(id)](#Alertstatus+delete) ⇒ <code>Promise</code>
    * [.update(id, order, description, colour)](#Alertstatus+update) ⇒ <code>Promise</code>

<a name="Alertstatus+create"></a>

### alertstatus.create(value, stage, order, description, colour) ⇒ <code>Promise</code>
Create a new alert status

**Kind**: instance method of [<code>Alertstatus</code>](#Alertstatus)  
**Returns**: <code>Promise</code> - A promise that contains the created alert status  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>string</code> |  | The value of the alert status |
| stage | <code>string</code> |  | The stage of the alert status |
| order | <code>string</code> | <code>0</code> | The order of the alert status |
| description | <code>string</code> | <code>null</code> | The description of the alert status |
| colour | <code>string</code> | <code>&quot;#F1A5E7&quot;</code> | The color of the alert status |

<a name="Alertstatus+delete"></a>

### alertstatus.delete(id) ⇒ <code>Promise</code>
Delete an alert status

**Kind**: instance method of [<code>Alertstatus</code>](#Alertstatus)  
**Returns**: <code>Promise</code> - A promise that contains the deleted alert status  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the alert status |

<a name="Alertstatus+update"></a>

### alertstatus.update(id, order, description, colour) ⇒ <code>Promise</code>
Update an alert status

**Kind**: instance method of [<code>Alertstatus</code>](#Alertstatus)  
**Returns**: <code>Promise</code> - A promise that contains the updated alert status  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | The id of the alert status |
| order | <code>string</code> | <code>null</code> | The order of the alert status |
| description | <code>string</code> | <code>null</code> | The description of the alert status |
| colour | <code>string</code> | <code>null</code> | The color of the alert status |

<a name="Attack"></a>

## Attack
This class is used to interact with the Att&ck API

**Kind**: global class  

* [Attack](#Attack)
    * [.createCatalog(name, description, variant)](#Attack+createCatalog) ⇒ <code>Promise</code>
    * [.deleteCatalog(id)](#Attack+deleteCatalog) ⇒ <code>Promise</code>
    * [.updateCatalog(id, name, description, variant)](#Attack+updateCatalog)
    * [.importFile(url, catalogid, variant)](#Attack+importFile) ⇒ <code>Promise</code>
    * [.getPattern(id)](#Attack+getPattern) ⇒ <code>Promise</code>
    * [.deletePattern(id)](#Attack+deletePattern) ⇒ <code>Promise</code>
    * [.getCasePattern(caseid)](#Attack+getCasePattern) ⇒ <code>Promise</code>

<a name="Attack+createCatalog"></a>

### attack.createCatalog(name, description, variant) ⇒ <code>Promise</code>
Create catalog of TTP

**Kind**: instance method of [<code>Attack</code>](#Attack)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the catalog |
| description | <code>string</code> | <code>null</code> | The description of the catalog |
| variant | <code>string</code> | <code>null</code> | The variant of the catalog |

<a name="Attack+deleteCatalog"></a>

### attack.deleteCatalog(id) ⇒ <code>Promise</code>
Delete catalog of TTP

**Kind**: instance method of [<code>Attack</code>](#Attack)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the catalog |

<a name="Attack+updateCatalog"></a>

### attack.updateCatalog(id, name, description, variant)
Update catalog of TTP

**Kind**: instance method of [<code>Attack</code>](#Attack)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | The id of the catalog |
| name | <code>string</code> | <code>null</code> | The name of the catalog |
| description | <code>string</code> | <code>null</code> | The description of the catalog |
| variant | <code>string</code> | <code>null</code> | The variant of the catalog |

<a name="Attack+importFile"></a>

### attack.importFile(url, catalogid, variant) ⇒ <code>Promise</code>
Import MITRE Att&ck file

**Kind**: instance method of [<code>Attack</code>](#Attack)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  | The url of the file |
| catalogid | <code>string</code> |  | The id of the catalog |
| variant | <code>string</code> | <code>null</code> | The variant of the catalog |

<a name="Attack+getPattern"></a>

### attack.getPattern(id) ⇒ <code>Promise</code>
Get pattern

**Kind**: instance method of [<code>Attack</code>](#Attack)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the pattern |

<a name="Attack+deletePattern"></a>

### attack.deletePattern(id) ⇒ <code>Promise</code>
Delete pattern

**Kind**: instance method of [<code>Attack</code>](#Attack)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the pattern |

<a name="Attack+getCasePattern"></a>

### attack.getCasePattern(caseid) ⇒ <code>Promise</code>
Get Case pattern

**Kind**: instance method of [<code>Attack</code>](#Attack)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| caseid | <code>string</code> | The id of the case |

<a name="Audit"></a>

## Audit
This class is used to interact with the Audit API

**Kind**: global class  

* [Audit](#Audit)
    * [.createStream()](#Audit+createStream) ⇒ <code>Promise</code>
    * [.getStream(id)](#Audit+getStream)
    * [.getFlow(id)](#Audit+getFlow) ⇒ <code>Promise</code>

<a name="Audit+createStream"></a>

### audit.createStream() ⇒ <code>Promise</code>
Create a stream of audit events

**Kind**: instance method of [<code>Audit</code>](#Audit)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="Audit+getStream"></a>

### audit.getStream(id)
Get a stream of audit events

**Kind**: instance method of [<code>Audit</code>](#Audit)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the stream |

<a name="Audit+getFlow"></a>

### audit.getFlow(id) ⇒ <code>Promise</code>
Get flow of audit events

**Kind**: instance method of [<code>Audit</code>](#Audit)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | <code>null</code> | The id of the stream |

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

* [CaseReportTemplate](#CaseReportTemplate)
    * [.createCaseReportTemplate(title, group, description, definition, version)](#CaseReportTemplate+createCaseReportTemplate) ⇒ <code>Promise</code>
    * [.getCaseReportTemplateById(id)](#CaseReportTemplate+getCaseReportTemplateById) ⇒ <code>Promise</code>
    * [.deleteCaseReportTemplateById(id)](#CaseReportTemplate+deleteCaseReportTemplateById) ⇒ <code>Promise</code>
    * [.updateCaseReportTemplateById(id, title, group, description, definition, version)](#CaseReportTemplate+updateCaseReportTemplateById) ⇒ <code>Promise</code>
    * [.getCaseReportTemplatesOptions()](#CaseReportTemplate+getCaseReportTemplatesOptions) ⇒ <code>Promise</code>
    * [.createAttachmentToCaseReportTemplate(id, attachment, canrename)](#CaseReportTemplate+createAttachmentToCaseReportTemplate)
    * [.getAttachmentOfCaseReportTemplate(id, attachmentid)](#CaseReportTemplate+getAttachmentOfCaseReportTemplate) ⇒ <code>Promise</code>
    * [.deleteAttachmentOfCaseReportTemplate(id, attachmentid)](#CaseReportTemplate+deleteAttachmentOfCaseReportTemplate) ⇒ <code>Promise</code>
    * [.downloadAttachmentOfCaseReportTemplate(id, attachmentid)](#CaseReportTemplate+downloadAttachmentOfCaseReportTemplate) ⇒ <code>Promise</code>

<a name="CaseReportTemplate+createCaseReportTemplate"></a>

### caseReportTemplate.createCaseReportTemplate(title, group, description, definition, version) ⇒ <code>Promise</code>
Create case report template

**Kind**: instance method of [<code>CaseReportTemplate</code>](#CaseReportTemplate)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | The title of the case report template |
| group | <code>string</code> | The group of the case report template |
| description | <code>string</code> | The description of the case report template |
| definition | <code>string</code> | The definition of the case report template |
| version | <code>string</code> | The version of the case report template |

<a name="CaseReportTemplate+getCaseReportTemplateById"></a>

### caseReportTemplate.getCaseReportTemplateById(id) ⇒ <code>Promise</code>
Get case report template by id

**Kind**: instance method of [<code>CaseReportTemplate</code>](#CaseReportTemplate)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case report template |

<a name="CaseReportTemplate+deleteCaseReportTemplateById"></a>

### caseReportTemplate.deleteCaseReportTemplateById(id) ⇒ <code>Promise</code>
Delete case report template by id

**Kind**: instance method of [<code>CaseReportTemplate</code>](#CaseReportTemplate)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case report template |

<a name="CaseReportTemplate+updateCaseReportTemplateById"></a>

### caseReportTemplate.updateCaseReportTemplateById(id, title, group, description, definition, version) ⇒ <code>Promise</code>
Update case report template by id

**Kind**: instance method of [<code>CaseReportTemplate</code>](#CaseReportTemplate)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | The id of the case report template |
| title | <code>string</code> | <code>null</code> | The title of the case report template |
| group | <code>string</code> | <code>null</code> | The group of the case report template |
| description | <code>string</code> | <code>null</code> | The description of the case report template |
| definition | <code>string</code> | <code>null</code> | The definition of the case report template |
| version | <code>string</code> | <code>null</code> | The version of the case report template |

<a name="CaseReportTemplate+getCaseReportTemplatesOptions"></a>

### caseReportTemplate.getCaseReportTemplatesOptions() ⇒ <code>Promise</code>
Get case report templates options

**Kind**: instance method of [<code>CaseReportTemplate</code>](#CaseReportTemplate)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="CaseReportTemplate+createAttachmentToCaseReportTemplate"></a>

### caseReportTemplate.createAttachmentToCaseReportTemplate(id, attachment, canrename)
Create attachment to case report template

**Kind**: instance method of [<code>CaseReportTemplate</code>](#CaseReportTemplate)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | The id of the case report template |
| attachment | <code>Array.&lt;string&gt;</code> |  | The attachment of the case report template |
| canrename | <code>boolean</code> | <code>true</code> | The canrename of the case report template |

<a name="CaseReportTemplate+getAttachmentOfCaseReportTemplate"></a>

### caseReportTemplate.getAttachmentOfCaseReportTemplate(id, attachmentid) ⇒ <code>Promise</code>
Get attachment of case report template

**Kind**: instance method of [<code>CaseReportTemplate</code>](#CaseReportTemplate)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case report template |
| attachmentid | <code>string</code> | The attachmentid of the case report template |

<a name="CaseReportTemplate+deleteAttachmentOfCaseReportTemplate"></a>

### caseReportTemplate.deleteAttachmentOfCaseReportTemplate(id, attachmentid) ⇒ <code>Promise</code>
Delete attachment of case report template

**Kind**: instance method of [<code>CaseReportTemplate</code>](#CaseReportTemplate)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case report template |
| attachmentid | <code>string</code> | The attachmentid of the case report template |

<a name="CaseReportTemplate+downloadAttachmentOfCaseReportTemplate"></a>

### caseReportTemplate.downloadAttachmentOfCaseReportTemplate(id, attachmentid) ⇒ <code>Promise</code>
Download attachment of case report template

**Kind**: instance method of [<code>CaseReportTemplate</code>](#CaseReportTemplate)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case report template |
| attachmentid | <code>string</code> | The attachmentid of the case report template |

<a name="Casestatus"></a>

## Casestatus
This class is used to interact with the casestatus API

**Kind**: global class  

* [Casestatus](#Casestatus)
    * [.create(value, stage, order, description, colour)](#Casestatus+create) ⇒ <code>Promise</code>
    * [.delete(id)](#Casestatus+delete) ⇒ <code>Promise</code>
    * [.update(id, order, description, colour)](#Casestatus+update) ⇒ <code>Promise</code>

<a name="Casestatus+create"></a>

### casestatus.create(value, stage, order, description, colour) ⇒ <code>Promise</code>
Create a new casestatus

**Kind**: instance method of [<code>Casestatus</code>](#Casestatus)  
**Returns**: <code>Promise</code> - A promise that contains the created casestatus  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>string</code> |  | The value of the casestatus |
| stage | <code>string</code> |  | The stage of the casestatus |
| order | <code>string</code> | <code>0</code> | The order of the casestatus |
| description | <code>string</code> | <code>null</code> | The description of the casestatus |
| colour | <code>string</code> | <code>&quot;#F1A5E7&quot;</code> | The color of the casestatus |

<a name="Casestatus+delete"></a>

### casestatus.delete(id) ⇒ <code>Promise</code>
Delete a casestatus

**Kind**: instance method of [<code>Casestatus</code>](#Casestatus)  
**Returns**: <code>Promise</code> - A promise that contains the deleted casestatus  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the casestatus |

<a name="Casestatus+update"></a>

### casestatus.update(id, order, description, colour) ⇒ <code>Promise</code>
Update a casestatus

**Kind**: instance method of [<code>Casestatus</code>](#Casestatus)  
**Returns**: <code>Promise</code> - A promise that contains the updated casestatus  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | The id of the casestatus |
| order | <code>string</code> | <code>null</code> | The order to update |
| description | <code>string</code> | <code>null</code> | The new value of the parameter |
| colour | <code>string</code> | <code>null</code> | The new value of the parameter |

<a name="CaseTemplate"></a>

## CaseTemplate
This class is used to interact with the CaseTemplate API

**Kind**: global class  

* [CaseTemplate](#CaseTemplate)
    * [.createCaseTemplate(name, displayName, titlePrefix, description, severity, tags, flag, tlp, pap, summary, tasks, pageTeplateIds, customFields)](#CaseTemplate+createCaseTemplate) ⇒ <code>Promise</code>
    * [.getCaseTemplate(id)](#CaseTemplate+getCaseTemplate) ⇒ <code>Promise</code>
    * [.deleteCaseTemplate(id)](#CaseTemplate+deleteCaseTemplate) ⇒ <code>Promise</code>
    * [.updateCaseTemplate(id, name, displayName, titlePrefix, description, severity, tags, flag, tlp, pap, summary, customFields, tasks)](#CaseTemplate+updateCaseTemplate) ⇒ <code>Promise</code>
    * [.linkPageTemplatesToCaseTemplate(id, pageTemplateIds)](#CaseTemplate+linkPageTemplatesToCaseTemplate) ⇒ <code>Promise</code>

<a name="CaseTemplate+createCaseTemplate"></a>

### caseTemplate.createCaseTemplate(name, displayName, titlePrefix, description, severity, tags, flag, tlp, pap, summary, tasks, pageTeplateIds, customFields) ⇒ <code>Promise</code>
Create case template

**Kind**: instance method of [<code>CaseTemplate</code>](#CaseTemplate)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the case template |
| displayName | <code>string</code> | <code>null</code> | The display name of the case template |
| titlePrefix | <code>string</code> | <code>null</code> | The title prefix of the case template |
| description | <code>string</code> | <code>null</code> | The description of the case template |
| severity | <code>string</code> | <code>2</code> | The severity of the case template |
| tags | <code>string</code> |  | The tags of the case template |
| flag | <code>string</code> | <code>false</code> | The flag of the case template |
| tlp | <code>string</code> | <code>2</code> | The tlp of the case template |
| pap | <code>string</code> | <code>2</code> | The pap of the case template |
| summary | <code>string</code> | <code>null</code> | The summary of the case template |
| tasks | <code>string</code> |  | The tasks of the case template |
| pageTeplateIds | <code>string</code> |  | The page template ids of the case template |
| customFields | <code>string</code> |  | The custom fields of the case template |

<a name="CaseTemplate+getCaseTemplate"></a>

### caseTemplate.getCaseTemplate(id) ⇒ <code>Promise</code>
Get case template

**Kind**: instance method of [<code>CaseTemplate</code>](#CaseTemplate)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case template |

<a name="CaseTemplate+deleteCaseTemplate"></a>

### caseTemplate.deleteCaseTemplate(id) ⇒ <code>Promise</code>
Delete case template

**Kind**: instance method of [<code>CaseTemplate</code>](#CaseTemplate)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case template |

<a name="CaseTemplate+updateCaseTemplate"></a>

### caseTemplate.updateCaseTemplate(id, name, displayName, titlePrefix, description, severity, tags, flag, tlp, pap, summary, customFields, tasks) ⇒ <code>Promise</code>
Update case template

**Kind**: instance method of [<code>CaseTemplate</code>](#CaseTemplate)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | The id of the case template |
| name | <code>string</code> | <code>null</code> | The name of the case template |
| displayName | <code>string</code> | <code>null</code> | The display name of the case template |
| titlePrefix | <code>string</code> | <code>null</code> | The title prefix of the case template |
| description | <code>string</code> | <code>null</code> | The description of the case template |
| severity | <code>string</code> | <code>null</code> | The severity of the case template |
| tags | <code>string</code> | <code>null</code> | The tags of the case template |
| flag | <code>string</code> | <code>null</code> | The flag of the case template |
| tlp | <code>string</code> | <code>null</code> | The tlp of the case template |
| pap | <code>string</code> | <code>null</code> | The pap of the case template |
| summary | <code>string</code> | <code>null</code> | The summary of the case template |
| customFields | <code>string</code> | <code>null</code> | The custom fields of the case template |
| tasks | <code>string</code> | <code>null</code> | The tasks of the case template |

<a name="CaseTemplate+linkPageTemplatesToCaseTemplate"></a>

### caseTemplate.linkPageTemplatesToCaseTemplate(id, pageTemplateIds) ⇒ <code>Promise</code>
Link pages template to case template

**Kind**: instance method of [<code>CaseTemplate</code>](#CaseTemplate)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the case template |
| pageTemplateIds | <code>string</code> | The page template ids to link to the case template |

<a name="Comment"></a>

## Comment
This class is used to interact with the comment API

**Kind**: global class  
<a name="Cortex"></a>

## Cortex
This class is used to interact with the Cortex API

**Kind**: global class  

* [Cortex](#Cortex)
    * [.createAction(responderId, cordexId, objectType, objectId, parameters, tlp)](#Cortex+createAction) ⇒ <code>Promise</code>
    * [.getActionsByEntity(entityType, entityId)](#Cortex+getActionsByEntity)
    * [.listAnalyzers()](#Cortex+listAnalyzers) ⇒ <code>Promise</code>
    * [.listAnalyzersByType(type)](#Cortex+listAnalyzersByType) ⇒ <code>Promise</code>
    * [.getAnalyzerById(id)](#Cortex+getAnalyzerById) ⇒ <code>Promise</code>
    * [.createJob(analyzerId, cordexId, artifactId, parameters)](#Cortex+createJob) ⇒ <code>Promise</code>
    * [.getJobById(id)](#Cortex+getJobById) ⇒ <code>Promise</code>
    * [.getAnalyzeTemplateContent(analyzerId)](#Cortex+getAnalyzeTemplateContent) ⇒ <code>Promise</code>
    * [.importAnalyzerTemplates(templates)](#Cortex+importAnalyzerTemplates) ⇒ <code>Promise</code>
    * [.createAnalyzerTemplate(analyzerId, content)](#Cortex+createAnalyzerTemplate) ⇒ <code>Promise</code>
    * [.deleteAnalyzerTemplate(analyzerTemplateId)](#Cortex+deleteAnalyzerTemplate) ⇒ <code>Promise</code>
    * [.updateAnalyzerTemplate(analyzerTemplateId, content)](#Cortex+updateAnalyzerTemplate) ⇒ <code>Promise</code>
    * [.listResponders(type, id)](#Cortex+listResponders) ⇒ <code>Promise</code>

<a name="Cortex+createAction"></a>

### cortex.createAction(responderId, cordexId, objectType, objectId, parameters, tlp) ⇒ <code>Promise</code>
Create an action

**Kind**: instance method of [<code>Cortex</code>](#Cortex)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| responderId | <code>string</code> | The responder id of the action |
| cordexId | <code>string</code> | The cortex id of the action |
| objectType | <code>string</code> | The object type of the action |
| objectId | <code>string</code> | The objectId type of the action |
| parameters | <code>string</code> | The parameters of the action |
| tlp | <code>string</code> | The tlp of the action |

<a name="Cortex+getActionsByEntity"></a>

### cortex.getActionsByEntity(entityType, entityId)
Get actions by entity

**Kind**: instance method of [<code>Cortex</code>](#Cortex)  

| Param | Type | Description |
| --- | --- | --- |
| entityType | <code>string</code> | The entity type of the action |
| entityId | <code>string</code> | The entity id of the action |

<a name="Cortex+listAnalyzers"></a>

### cortex.listAnalyzers() ⇒ <code>Promise</code>
List analyzers

**Kind**: instance method of [<code>Cortex</code>](#Cortex)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="Cortex+listAnalyzersByType"></a>

### cortex.listAnalyzersByType(type) ⇒ <code>Promise</code>
List analyzers by type

**Kind**: instance method of [<code>Cortex</code>](#Cortex)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the analyzer |

<a name="Cortex+getAnalyzerById"></a>

### cortex.getAnalyzerById(id) ⇒ <code>Promise</code>
Get analyzer by id

**Kind**: instance method of [<code>Cortex</code>](#Cortex)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the analyzer |

<a name="Cortex+createJob"></a>

### cortex.createJob(analyzerId, cordexId, artifactId, parameters) ⇒ <code>Promise</code>
Create a cortex job

**Kind**: instance method of [<code>Cortex</code>](#Cortex)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| analyzerId | <code>string</code> | The analyzer id of the job |
| cordexId | <code>string</code> | The cortex id of the job |
| artifactId | <code>string</code> | The artifact id of the job |
| parameters | <code>string</code> | The parameters of the job |

<a name="Cortex+getJobById"></a>

### cortex.getJobById(id) ⇒ <code>Promise</code>
Get cortex job by id

**Kind**: instance method of [<code>Cortex</code>](#Cortex)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the job |

<a name="Cortex+getAnalyzeTemplateContent"></a>

### cortex.getAnalyzeTemplateContent(analyzerId) ⇒ <code>Promise</code>
Get analyze template content

**Kind**: instance method of [<code>Cortex</code>](#Cortex)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| analyzerId | <code>string</code> | The analyzer id of the template |

<a name="Cortex+importAnalyzerTemplates"></a>

### cortex.importAnalyzerTemplates(templates) ⇒ <code>Promise</code>
Import analyzer templates

**Kind**: instance method of [<code>Cortex</code>](#Cortex)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| templates | <code>string</code> | The templates of the analyzer |

<a name="Cortex+createAnalyzerTemplate"></a>

### cortex.createAnalyzerTemplate(analyzerId, content) ⇒ <code>Promise</code>
Create analyzer template

**Kind**: instance method of [<code>Cortex</code>](#Cortex)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| analyzerId | <code>string</code> | The analyzer id of the template |
| content | <code>string</code> | The content of the template |

<a name="Cortex+deleteAnalyzerTemplate"></a>

### cortex.deleteAnalyzerTemplate(analyzerTemplateId) ⇒ <code>Promise</code>
Delete analyzer template

**Kind**: instance method of [<code>Cortex</code>](#Cortex)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| analyzerTemplateId | <code>string</code> | The analyzer id of the template |

<a name="Cortex+updateAnalyzerTemplate"></a>

### cortex.updateAnalyzerTemplate(analyzerTemplateId, content) ⇒ <code>Promise</code>
Update analyser template

**Kind**: instance method of [<code>Cortex</code>](#Cortex)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| analyzerTemplateId | <code>string</code> | The analyzer id of the template |
| content | <code>string</code> | The content of the template |

<a name="Cortex+listResponders"></a>

### cortex.listResponders(type, id) ⇒ <code>Promise</code>
List responders

**Kind**: instance method of [<code>Cortex</code>](#Cortex)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the responder |
| id | <code>string</code> | The id of the responder |

<a name="Customfield"></a>

## Customfield
This class is used to interact with the customfield API

**Kind**: global class  

* [Customfield](#Customfield)
    * [.list()](#Customfield+list) ⇒ <code>Promise</code>
    * [.create(name, displayName, group, description, type, mandatory, options)](#Customfield+create) ⇒ <code>Promise</code>
    * [.delete(id)](#Customfield+delete) ⇒ <code>Promise</code>
    * [.update(id, displayName, description, type, options, mandatory)](#Customfield+update) ⇒ <code>Promise</code>

<a name="Customfield+list"></a>

### customfield.list() ⇒ <code>Promise</code>
List all customfields

**Kind**: instance method of [<code>Customfield</code>](#Customfield)  
**Returns**: <code>Promise</code> - A promise that contains the list of customfields  
<a name="Customfield+create"></a>

### customfield.create(name, displayName, group, description, type, mandatory, options) ⇒ <code>Promise</code>
Create a new customfield

**Kind**: instance method of [<code>Customfield</code>](#Customfield)  
**Returns**: <code>Promise</code> - A promise that contains the created customfield  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the customfield |
| displayName | <code>string</code> |  | The display name of the customfield |
| group | <code>string</code> |  | The group of the customfield |
| description | <code>string</code> |  | The description of the customfield |
| type | <code>string</code> |  | The type of the customfield |
| mandatory | <code>string</code> | <code>false</code> | The mandatory of the customfield |
| options | <code>string</code> |  | The options of the customfield |

<a name="Customfield+delete"></a>

### customfield.delete(id) ⇒ <code>Promise</code>
Delete a customfield

**Kind**: instance method of [<code>Customfield</code>](#Customfield)  
**Returns**: <code>Promise</code> - A promise that contains the deleted customfield  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the customfield |

<a name="Customfield+update"></a>

### customfield.update(id, displayName, description, type, options, mandatory) ⇒ <code>Promise</code>
Update a customfield

**Kind**: instance method of [<code>Customfield</code>](#Customfield)  
**Returns**: <code>Promise</code> - A promise that contains the updated customfield  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | The id of the customfield |
| displayName | <code>string</code> | <code>null</code> | The display name of the customfield |
| description | <code>string</code> | <code>null</code> | The description of the customfield |
| type | <code>string</code> | <code>null</code> | The type of the customfield |
| options | <code>string</code> |  | The options of the customfield |
| mandatory | <code>string</code> | <code>false</code> | The mandatory of the customfield |

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

* [Describe](#Describe)
    * [.describe(model)](#Describe+describe) ⇒ <code>Promise</code>
    * [.describeAll()](#Describe+describeAll) ⇒ <code>Promise</code>

<a name="Describe+describe"></a>

### describe.describe(model) ⇒ <code>Promise</code>
Decribe a model

**Kind**: instance method of [<code>Describe</code>](#Describe)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| model | <code>string</code> | The name of the model to describe |

<a name="Describe+describeAll"></a>

### describe.describeAll() ⇒ <code>Promise</code>
Decribe all models

**Kind**: instance method of [<code>Describe</code>](#Describe)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="Function"></a>

## Function
This class is used to interact with the function API

**Kind**: global class  

* [Function](#Function)
    * [.createFunction(name, mode, definition, description, config)](#Function+createFunction)
    * [.invokeFunction(id)](#Function+invokeFunction) ⇒ <code>Promise</code>
    * [.getFunction(id)](#Function+getFunction) ⇒ <code>Promise</code>
    * [.deleteFunction(id)](#Function+deleteFunction) ⇒ <code>Promise</code>
    * [.updateFunction(id, mode, definition, description, config)](#Function+updateFunction) ⇒ <code>Promise</code>
    * [.testFunction(name, definition, config, input)](#Function+testFunction) ⇒ <code>Promise</code>

<a name="Function+createFunction"></a>

### function.createFunction(name, mode, definition, description, config)
Create function

**Kind**: instance method of [<code>Function</code>](#Function)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the function |
| mode | <code>string</code> | The mode of the function |
| definition | <code>string</code> | The definition of the function |
| description | <code>string</code> | The description of the function |
| config | <code>string</code> | The config of the function |

<a name="Function+invokeFunction"></a>

### function.invokeFunction(id) ⇒ <code>Promise</code>
Invoke function

**Kind**: instance method of [<code>Function</code>](#Function)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the function |

<a name="Function+getFunction"></a>

### function.getFunction(id) ⇒ <code>Promise</code>
Get function

**Kind**: instance method of [<code>Function</code>](#Function)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the function |

<a name="Function+deleteFunction"></a>

### function.deleteFunction(id) ⇒ <code>Promise</code>
Delete function

**Kind**: instance method of [<code>Function</code>](#Function)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the function |

<a name="Function+updateFunction"></a>

### function.updateFunction(id, mode, definition, description, config) ⇒ <code>Promise</code>
Update function

**Kind**: instance method of [<code>Function</code>](#Function)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the function |
| mode | <code>string</code> | The mode of the function |
| definition | <code>string</code> | The definition of the function |
| description | <code>string</code> | The description of the function |
| config | <code>string</code> | The config of the function |

<a name="Function+testFunction"></a>

### function.testFunction(name, definition, config, input) ⇒ <code>Promise</code>
Test function

**Kind**: instance method of [<code>Function</code>](#Function)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the function |
| definition | <code>string</code> | The definition of the function |
| config | <code>string</code> | The config of the function |
| input | <code>string</code> | The input of the function |

<a name="License"></a>

## License
This class is used to interact with the license API

**Kind**: global class  

* [License](#License)
    * [.getCurrentLicense()](#License+getCurrentLicense) ⇒ <code>Promise</code>
    * [.getLicense(id)](#License+getLicense) ⇒ <code>Promise</code>
    * [.getAllLicenses()](#License+getAllLicenses) ⇒ <code>Promise</code>
    * [.addLicense(license)](#License+addLicense) ⇒ <code>Promise</code>
    * [.activateLicense(id)](#License+activateLicense) ⇒ <code>Promise</code>
    * [.getChallenge()](#License+getChallenge) ⇒ <code>Promise</code>

<a name="License+getCurrentLicense"></a>

### license.getCurrentLicense() ⇒ <code>Promise</code>
Get Current License

**Kind**: instance method of [<code>License</code>](#License)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="License+getLicense"></a>

### license.getLicense(id) ⇒ <code>Promise</code>
Get License

**Kind**: instance method of [<code>License</code>](#License)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the license |

<a name="License+getAllLicenses"></a>

### license.getAllLicenses() ⇒ <code>Promise</code>
Get all licenses

**Kind**: instance method of [<code>License</code>](#License)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="License+addLicense"></a>

### license.addLicense(license) ⇒ <code>Promise</code>
Add license & activate

**Kind**: instance method of [<code>License</code>](#License)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| license | <code>string</code> | The license to add |

<a name="License+activateLicense"></a>

### license.activateLicense(id) ⇒ <code>Promise</code>
Activate license

**Kind**: instance method of [<code>License</code>](#License)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the license |

<a name="License+getChallenge"></a>

### license.getChallenge() ⇒ <code>Promise</code>
Get challenge

**Kind**: instance method of [<code>License</code>](#License)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="Log"></a>

## Log
This class is used to interact with the Log API

**Kind**: global class  

* [Log](#Log)
    * [.downloadAttachment(id, attachmentId)](#Log+downloadAttachment) ⇒ <code>Promise</code>
    * [.getAttachment(caseId, attachmentId)](#Log+getAttachment) ⇒ <code>Promise</code>
    * [.getAttachmentsFromObservable(observableId, attachmentId)](#Log+getAttachmentsFromObservable) ⇒ <code>Promise</code>

<a name="Log+downloadAttachment"></a>

### log.downloadAttachment(id, attachmentId) ⇒ <code>Promise</code>
Download attachments from log

**Kind**: instance method of [<code>Log</code>](#Log)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the log |
| attachmentId | <code>string</code> | The id of the attachment |

<a name="Log+getAttachment"></a>

### log.getAttachment(caseId, attachmentId) ⇒ <code>Promise</code>
Get Attachment from log

**Kind**: instance method of [<code>Log</code>](#Log)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| caseId | <code>string</code> | The id of the case |
| attachmentId | <code>string</code> | The id of the attachment |

<a name="Log+getAttachmentsFromObservable"></a>

### log.getAttachmentsFromObservable(observableId, attachmentId) ⇒ <code>Promise</code>
Get attachments from observable

**Kind**: instance method of [<code>Log</code>](#Log)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| observableId | <code>string</code> | The id of the observable |
| attachmentId | <code>string</code> | The id of the attachment |

<a name="Login"></a>

## Login
This class is used to interact with the Login API

**Kind**: global class  

* [Login](#Login)
    * [.login(user, password, organisation, code)](#Login+login)
    * [.logout()](#Login+logout) ⇒ <code>Promise</code>
    * [.logoutPost()](#Login+logoutPost) ⇒ <code>Promise</code>
    * [.getPasswordPolicy()](#Login+getPasswordPolicy) ⇒ <code>Promise</code>

<a name="Login+login"></a>

### login.login(user, password, organisation, code)
Login

**Kind**: instance method of [<code>Login</code>](#Login)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| user | <code>string</code> |  | The user to login |
| password | <code>string</code> |  | The password of the user |
| organisation | <code>string</code> | <code>null</code> | The organisation of the user |
| code | <code>string</code> | <code>null</code> | The code of the user |

<a name="Login+logout"></a>

### login.logout() ⇒ <code>Promise</code>
Logout

**Kind**: instance method of [<code>Login</code>](#Login)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="Login+logoutPost"></a>

### login.logoutPost() ⇒ <code>Promise</code>
Logout (POST)

**Kind**: instance method of [<code>Login</code>](#Login)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="Login+getPasswordPolicy"></a>

### login.getPasswordPolicy() ⇒ <code>Promise</code>
Get current password policy

**Kind**: instance method of [<code>Login</code>](#Login)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="MISP"></a>

## MISP
This class is used to interact with the MISP API

**Kind**: global class  

* [MISP](#MISP)
    * [.getMISPStatus()](#MISP+getMISPStatus) ⇒ <code>Promise</code>
    * [.syncWithMISP()](#MISP+syncWithMISP) ⇒ <code>Promise</code>
    * [.exportCaseToMISP(caseid, mispName)](#MISP+exportCaseToMISP)
    * [.importCaseFromMISP(_json, file)](#MISP+importCaseFromMISP) ⇒ <code>Promise</code>

<a name="MISP+getMISPStatus"></a>

### misP.getMISPStatus() ⇒ <code>Promise</code>
Get MISP status

**Kind**: instance method of [<code>MISP</code>](#MISP)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="MISP+syncWithMISP"></a>

### misP.syncWithMISP() ⇒ <code>Promise</code>
Sync with MISP server

**Kind**: instance method of [<code>MISP</code>](#MISP)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="MISP+exportCaseToMISP"></a>

### misP.exportCaseToMISP(caseid, mispName)
Export case to MISP

**Kind**: instance method of [<code>MISP</code>](#MISP)  

| Param | Type | Description |
| --- | --- | --- |
| caseid | <code>string</code> | The case id of the case |
| mispName | <code>string</code> | The name of the MISP server |

<a name="MISP+importCaseFromMISP"></a>

### misP.importCaseFromMISP(_json, file) ⇒ <code>Promise</code>
Import case from MISP

**Kind**: instance method of [<code>MISP</code>](#MISP)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| _json | <code>string</code> | The json of the MISP event |
| file | <code>string</code> | The file of the MISP event |

<a name="Observable"></a>

## Observable
This class is used to interact with the observable API

**Kind**: global class  
<a name="ObservableType"></a>

## ObservableType
This class is used to interact with the ObservableType API

**Kind**: global class  

* [ObservableType](#ObservableType)
    * [.getObservableTypeById(id)](#ObservableType+getObservableTypeById) ⇒ <code>Promise</code>
    * [.deleteObservableTypeById(id)](#ObservableType+deleteObservableTypeById) ⇒ <code>Promise</code>
    * [.createObservableType(name, isAttachment)](#ObservableType+createObservableType) ⇒ <code>Promise</code>

<a name="ObservableType+getObservableTypeById"></a>

### observableType.getObservableTypeById(id) ⇒ <code>Promise</code>
Get observable type by id

**Kind**: instance method of [<code>ObservableType</code>](#ObservableType)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the observable type |

<a name="ObservableType+deleteObservableTypeById"></a>

### observableType.deleteObservableTypeById(id) ⇒ <code>Promise</code>
Delete observable type by id

**Kind**: instance method of [<code>ObservableType</code>](#ObservableType)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the observable type |

<a name="ObservableType+createObservableType"></a>

### observableType.createObservableType(name, isAttachment) ⇒ <code>Promise</code>
Create observable type

**Kind**: instance method of [<code>ObservableType</code>](#ObservableType)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the observable type |
| isAttachment | <code>string</code> | The isAttachment of the observable type |

<a name="Organisation"></a>

## Organisation
This class is used to interact with the Organisation API

**Kind**: global class  

* [Organisation](#Organisation)
    * [.addAttachment(attachments, canRename)](#Organisation+addAttachment) ⇒ <code>Promise</code>
    * [.getAttachment(id)](#Organisation+getAttachment) ⇒ <code>Promise</code>
    * [.deleteAttachment(id)](#Organisation+deleteAttachment) ⇒ <code>Promise</code>
    * [.create(name, description, taskRule, observableRule, locked)](#Organisation+create) ⇒ <code>Promise</code>
    * [.get(id)](#Organisation+get) ⇒ <code>Promise</code>
    * [.update(id, name, description, taskRule, observableRule, locked, avatar)](#Organisation+update) ⇒ <code>Promise</code>
    * [.getAvatar(id, fileHash)](#Organisation+getAvatar) ⇒ <code>Promise</code>
    * [.link(id, organisationId)](#Organisation+link) ⇒ <code>Promise</code>
    * [.unlink(id, organisationId)](#Organisation+unlink) ⇒ <code>Promise</code>
    * [.listLink(id)](#Organisation+listLink) ⇒ <code>Promise</code>
    * [.bulkLink(id, organisationIds)](#Organisation+bulkLink) ⇒ <code>Promise</code>
    * [.listSharingProfiles()](#Organisation+listSharingProfiles) ⇒ <code>Promise</code>

<a name="Organisation+addAttachment"></a>

### organisation.addAttachment(attachments, canRename) ⇒ <code>Promise</code>
Add attachment to organisation

**Kind**: instance method of [<code>Organisation</code>](#Organisation)  
**Returns**: <code>Promise</code> - A promise that contains the added attachment  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| attachments | <code>Array.&lt;string&gt;</code> |  | The attachment to add |
| canRename | <code>boolean</code> | <code>false</code> | The canRename of the attachment |

<a name="Organisation+getAttachment"></a>

### organisation.getAttachment(id) ⇒ <code>Promise</code>
Get attachment by id

**Kind**: instance method of [<code>Organisation</code>](#Organisation)  
**Returns**: <code>Promise</code> - A promise that contains the attachment  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the attachment |

<a name="Organisation+deleteAttachment"></a>

### organisation.deleteAttachment(id) ⇒ <code>Promise</code>
Delete attachment by id

**Kind**: instance method of [<code>Organisation</code>](#Organisation)  
**Returns**: <code>Promise</code> - A promise that contains the deleted attachment  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the attachment |

<a name="Organisation+create"></a>

### organisation.create(name, description, taskRule, observableRule, locked) ⇒ <code>Promise</code>
Create organisation

**Kind**: instance method of [<code>Organisation</code>](#Organisation)  
**Returns**: <code>Promise</code> - A promise that contains the created organisation  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the organisation |
| description | <code>string</code> |  | The description of the organisation |
| taskRule | <code>string</code> | <code>null</code> | The taskRule of the organisation |
| observableRule | <code>string</code> | <code>null</code> | The observableRule of the organisation |
| locked | <code>boolean</code> | <code>false</code> | The locked stauts of the organisation |

<a name="Organisation+get"></a>

### organisation.get(id) ⇒ <code>Promise</code>
Get organisation by id

**Kind**: instance method of [<code>Organisation</code>](#Organisation)  
**Returns**: <code>Promise</code> - A promise that contains the organisation  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the organisation |

<a name="Organisation+update"></a>

### organisation.update(id, name, description, taskRule, observableRule, locked, avatar) ⇒ <code>Promise</code>
Update organisation by id

**Kind**: instance method of [<code>Organisation</code>](#Organisation)  
**Returns**: <code>Promise</code> - A promise that contains the updated organisation  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | The id of the organisation |
| name | <code>string</code> |  | The name of the organisation |
| description | <code>string</code> |  | The description of the organisation |
| taskRule | <code>string</code> | <code>null</code> | The taskRule of the organisation |
| observableRule | <code>string</code> | <code>null</code> | The observableRule of the organisation |
| locked | <code>boolean</code> | <code>false</code> | The locked stauts of the organisation |
| avatar | <code>string</code> | <code>null</code> | The avatar of the organisation |

<a name="Organisation+getAvatar"></a>

### organisation.getAvatar(id, fileHash) ⇒ <code>Promise</code>
Get organisation avatar by id

**Kind**: instance method of [<code>Organisation</code>](#Organisation)  
**Returns**: <code>Promise</code> - A promise that contains the avatar  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the organisation |
| fileHash | <code>string</code> | The fileHash of the avatar |

<a name="Organisation+link"></a>

### organisation.link(id, organisationId) ⇒ <code>Promise</code>
Link organisations

**Kind**: instance method of [<code>Organisation</code>](#Organisation)  
**Returns**: <code>Promise</code> - A promise that contains the linked organisation  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the organisation |
| organisationId | <code>string</code> | The id of the organisation to link |

<a name="Organisation+unlink"></a>

### organisation.unlink(id, organisationId) ⇒ <code>Promise</code>
Unlink organisations

**Kind**: instance method of [<code>Organisation</code>](#Organisation)  
**Returns**: <code>Promise</code> - A promise that contains the unlinked organisation  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the organisation |
| organisationId | <code>string</code> | The id of the organisation to unlink |

<a name="Organisation+listLink"></a>

### organisation.listLink(id) ⇒ <code>Promise</code>
List organisation link

**Kind**: instance method of [<code>Organisation</code>](#Organisation)  
**Returns**: <code>Promise</code> - A promise that contains the linked organisations  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the organisation |

<a name="Organisation+bulkLink"></a>

### organisation.bulkLink(id, organisationIds) ⇒ <code>Promise</code>
bulk link organisations

**Kind**: instance method of [<code>Organisation</code>](#Organisation)  
**Returns**: <code>Promise</code> - A promise that contains the linked organisations  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the organisation |
| organisationIds | <code>Array.&lt;string&gt;</code> | The ids of the organisations to link |

<a name="Organisation+listSharingProfiles"></a>

### organisation.listSharingProfiles() ⇒ <code>Promise</code>
list sharing profiles

**Kind**: instance method of [<code>Organisation</code>](#Organisation)  
**Returns**: <code>Promise</code> - A promise that contains the sharing profiles  
<a name="Page"></a>

## Page
This class is used to interact with the page API

**Kind**: global class  

* [Page](#Page)
    * [.createPage(title, content, order, category)](#Page+createPage) ⇒ <code>Promise</code>
    * [.deletePage(id)](#Page+deletePage) ⇒ <code>Promise</code>
    * [.updatePage(id, title, content, order, category)](#Page+updatePage) ⇒ <code>Promise</code>
    * [.createPageInCase(caseId, title, content, order, category)](#Page+createPageInCase) ⇒ <code>Promise</code>
    * [.deletePageInCase(caseId, id)](#Page+deletePageInCase) ⇒ <code>Promise</code>
    * [.updatePageInCase(caseId, id, title, content, order, category)](#Page+updatePageInCase) ⇒ <code>Promise</code>

<a name="Page+createPage"></a>

### page.createPage(title, content, order, category) ⇒ <code>Promise</code>
Create page

**Kind**: instance method of [<code>Page</code>](#Page)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| title | <code>string</code> |  | The title of the page |
| content | <code>string</code> |  | The content of the page |
| order | <code>string</code> | <code>null</code> | The order of the page |
| category | <code>string</code> |  | The category of the page |

<a name="Page+deletePage"></a>

### page.deletePage(id) ⇒ <code>Promise</code>
Delete page

**Kind**: instance method of [<code>Page</code>](#Page)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the page |

<a name="Page+updatePage"></a>

### page.updatePage(id, title, content, order, category) ⇒ <code>Promise</code>
Update page

**Kind**: instance method of [<code>Page</code>](#Page)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | The id of the page |
| title | <code>string</code> | <code>null</code> | The title of the page |
| content | <code>string</code> | <code>null</code> | The content of the page |
| order | <code>string</code> | <code>null</code> | The order of the page |
| category | <code>string</code> | <code>null</code> | The category of the page |

<a name="Page+createPageInCase"></a>

### page.createPageInCase(caseId, title, content, order, category) ⇒ <code>Promise</code>
Create a page in a case

**Kind**: instance method of [<code>Page</code>](#Page)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| caseId | <code>string</code> |  | The id of the case |
| title | <code>string</code> |  | The title of the page |
| content | <code>string</code> |  | The content of the page |
| order | <code>string</code> | <code>null</code> | The order of the page |
| category | <code>string</code> |  | The category of the page |

<a name="Page+deletePageInCase"></a>

### page.deletePageInCase(caseId, id) ⇒ <code>Promise</code>
Delete a page in a case

**Kind**: instance method of [<code>Page</code>](#Page)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| caseId | <code>string</code> | The id of the case |
| id | <code>string</code> | The id of the page |

<a name="Page+updatePageInCase"></a>

### page.updatePageInCase(caseId, id, title, content, order, category) ⇒ <code>Promise</code>
Update a page in a case

**Kind**: instance method of [<code>Page</code>](#Page)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| caseId | <code>string</code> |  | The id of the case |
| id | <code>string</code> |  | The id of the page |
| title | <code>string</code> | <code>null</code> | The title of the page |
| content | <code>string</code> | <code>null</code> | The content of the page |
| order | <code>string</code> | <code>null</code> | The order of the page |
| category | <code>string</code> | <code>null</code> | The category of the page |

<a name="PageTemplate"></a>

## PageTemplate
This class is used to interact with the PageTemplate API

**Kind**: global class  

* [PageTemplate](#PageTemplate)
    * [.createPageTemplate(title, content, order, category)](#PageTemplate+createPageTemplate) ⇒ <code>Promise</code>
    * [.deletePageTemplateById(id)](#PageTemplate+deletePageTemplateById) ⇒ <code>Promise</code>
    * [.updatePageTemplateById(id, title, content, order, category)](#PageTemplate+updatePageTemplateById) ⇒ <code>Promise</code>

<a name="PageTemplate+createPageTemplate"></a>

### pageTemplate.createPageTemplate(title, content, order, category) ⇒ <code>Promise</code>
Create page template

**Kind**: instance method of [<code>PageTemplate</code>](#PageTemplate)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | The title of the page template |
| content | <code>string</code> | The content of the page template |
| order | <code>string</code> | The order of the page template |
| category | <code>string</code> | The category of the page template |

<a name="PageTemplate+deletePageTemplateById"></a>

### pageTemplate.deletePageTemplateById(id) ⇒ <code>Promise</code>
delete page template by id

**Kind**: instance method of [<code>PageTemplate</code>](#PageTemplate)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the page template |

<a name="PageTemplate+updatePageTemplateById"></a>

### pageTemplate.updatePageTemplateById(id, title, content, order, category) ⇒ <code>Promise</code>
Update page template by id

**Kind**: instance method of [<code>PageTemplate</code>](#PageTemplate)  
**Returns**: <code>Promise</code> - The response of the request  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the page template |
| title | <code>string</code> | The title of the page template |
| content | <code>string</code> | The content of the page template |
| order | <code>string</code> | The order of the page template |
| category | <code>string</code> | The category of the page template |

<a name="Profile"></a>

## Profile
This class is used to interact with the Profile API

**Kind**: global class  

* [Profile](#Profile)
    * [.create(name, permissions)](#Profile+create) ⇒ <code>Promise</code>
    * [.get(id)](#Profile+get) ⇒ <code>Promise</code>
    * [.delete(id)](#Profile+delete) ⇒ <code>Promise</code>
    * [.update(id, name, permissions)](#Profile+update)

<a name="Profile+create"></a>

### profile.create(name, permissions) ⇒ <code>Promise</code>
Create a new profile

**Kind**: instance method of [<code>Profile</code>](#Profile)  
**Returns**: <code>Promise</code> - A promise that contains the created profile  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the profile |
| permissions | <code>Array.&lt;string&gt;</code> | The permissions of the profile |

<a name="Profile+get"></a>

### profile.get(id) ⇒ <code>Promise</code>
Get profile by id

**Kind**: instance method of [<code>Profile</code>](#Profile)  
**Returns**: <code>Promise</code> - A promise that contains the profile  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the profile |

<a name="Profile+delete"></a>

### profile.delete(id) ⇒ <code>Promise</code>
delete profile by id

**Kind**: instance method of [<code>Profile</code>](#Profile)  
**Returns**: <code>Promise</code> - A promise that contains the deleted profile  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the profile |

<a name="Profile+update"></a>

### profile.update(id, name, permissions)
Update a profile

**Kind**: instance method of [<code>Profile</code>](#Profile)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | The id of the profile |
| name | <code>string</code> | <code>null</code> | The name of the profile |
| permissions | <code>Array.&lt;string&gt;</code> | <code></code> | The permissions of the profile |

<a name="Share"></a>

## Share
This class is used to interact with the share API

**Kind**: global class  
<a name="Status"></a>

## Status
This class is used to interact with the Status API

**Kind**: global class  

* [Status](#Status)
    * [.getPlatformPublicStatus()](#Status+getPlatformPublicStatus) ⇒ <code>Promise</code>
    * [.getPlatformStatus()](#Status+getPlatformStatus) ⇒ <code>Promise</code>

<a name="Status+getPlatformPublicStatus"></a>

### status.getPlatformPublicStatus() ⇒ <code>Promise</code>
Get platform public status

**Kind**: instance method of [<code>Status</code>](#Status)  
**Returns**: <code>Promise</code> - The response of the request  
<a name="Status+getPlatformStatus"></a>

### status.getPlatformStatus() ⇒ <code>Promise</code>
Get platform status

**Kind**: instance method of [<code>Status</code>](#Status)  
**Returns**: <code>Promise</code> - The response of the request  
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

* [Taxonomy](#Taxonomy)
    * [.create(namespace, description, version, exclusive, predicate, values)](#Taxonomy+create)
    * [.import(file)](#Taxonomy+import) ⇒ <code>object</code>
    * [.activate(id)](#Taxonomy+activate) ⇒ <code>object</code>
    * [.deactivate(id)](#Taxonomy+deactivate) ⇒ <code>object</code>
    * [.get(id)](#Taxonomy+get) ⇒ <code>object</code>
    * [.delete(id)](#Taxonomy+delete) ⇒ <code>object</code>

<a name="Taxonomy+create"></a>

### taxonomy.create(namespace, description, version, exclusive, predicate, values)
Create a new Taxonomy

**Kind**: instance method of [<code>Taxonomy</code>](#Taxonomy)  

| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>string</code> | The namespace of the taxonomy |
| description | <code>string</code> | The description of the taxonomy |
| version | <code>string</code> | The version of the taxonomy |
| exclusive | <code>string</code> | Whether the taxonomy is exclusive or not |
| predicate | <code>string</code> | The predicate of the taxonomy |
| values | <code>string</code> | The color of the taxonomy |

<a name="Taxonomy+import"></a>

### taxonomy.import(file) ⇒ <code>object</code>
Import taxonomy from a zip file

**Kind**: instance method of [<code>Taxonomy</code>](#Taxonomy)  
**Returns**: <code>object</code> - The response  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | The zip file |

<a name="Taxonomy+activate"></a>

### taxonomy.activate(id) ⇒ <code>object</code>
Activate a taxonomy

**Kind**: instance method of [<code>Taxonomy</code>](#Taxonomy)  
**Returns**: <code>object</code> - The response  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the taxonomy |

<a name="Taxonomy+deactivate"></a>

### taxonomy.deactivate(id) ⇒ <code>object</code>
Deactivate a taxonomy

**Kind**: instance method of [<code>Taxonomy</code>](#Taxonomy)  
**Returns**: <code>object</code> - The response  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the taxonomy |

<a name="Taxonomy+get"></a>

### taxonomy.get(id) ⇒ <code>object</code>
Get a taxonomy

**Kind**: instance method of [<code>Taxonomy</code>](#Taxonomy)  
**Returns**: <code>object</code> - The response  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the taxonomy |

<a name="Taxonomy+delete"></a>

### taxonomy.delete(id) ⇒ <code>object</code>
Delete a taxonomy

**Kind**: instance method of [<code>Taxonomy</code>](#Taxonomy)  
**Returns**: <code>object</code> - The response  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the taxonomy |

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

* [User](#User)
    * [.get()](#User+get) ⇒ <code>Promise</code>
    * [.create(login, name, email, password, profile, organisation, type)](#User+create) ⇒ <code>Promise</code>
    * [.get(id)](#User+get) ⇒ <code>Promise</code>
    * [.lock(id)](#User+lock) ⇒ <code>Promise</code>
    * [.update(id, name, organisation, profile, locked, avatar, email, defaultOrganisation, type)](#User+update) ⇒ <code>Promise</code>
    * [.delete(id)](#User+delete) ⇒ <code>Promise</code>
    * [.setOrganisations(id, organisations)](#User+setOrganisations) ⇒ <code>Promise</code>
    * [.setPassword(id, password)](#User+setPassword) ⇒ <code>Promise</code>
    * [.changePassword(id, oldPassword, newPassword)](#User+changePassword) ⇒ <code>Promise</code>
    * [.getApiKeys(id)](#User+getApiKeys) ⇒ <code>Promise</code>
    * [.removeApiKey(id)](#User+removeApiKey) ⇒ <code>Promise</code>
    * [.renewApiKey(id)](#User+renewApiKey) ⇒ <code>Promise</code>
    * [.getAvatar(id)](#User+getAvatar) ⇒ <code>Promise</code>

<a name="User+get"></a>

### user.get() ⇒ <code>Promise</code>
Get current user info

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that contains the user info  
<a name="User+create"></a>

### user.create(login, name, email, password, profile, organisation, type) ⇒ <code>Promise</code>
Create a new user

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that contains the created user  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| login | <code>string</code> |  | The login of the user |
| name | <code>string</code> |  | The name of the user |
| email | <code>string</code> | <code>null</code> | The email of the user |
| password | <code>string</code> |  | The password of the user |
| profile | <code>string</code> |  | The profile of the user |
| organisation | <code>string</code> | <code>null</code> | The organisation of the user |
| type | <code>string</code> |  | The type of the user |

<a name="User+get"></a>

### user.get(id) ⇒ <code>Promise</code>
Get user by id

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that contains the user  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the user |

<a name="User+lock"></a>

### user.lock(id) ⇒ <code>Promise</code>
Lock an user by id

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that contains the locked user  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the user |

<a name="User+update"></a>

### user.update(id, name, organisation, profile, locked, avatar, email, defaultOrganisation, type) ⇒ <code>Promise</code>
Update an user by id

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that contains the updated user  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | The id of the user |
| name | <code>string</code> | <code>null</code> | The name of the user |
| organisation | <code>string</code> | <code>null</code> | The organisation of the user |
| profile | <code>string</code> | <code>null</code> | The profile of the user |
| locked | <code>string</code> | <code>null</code> | The locked status of the user |
| avatar | <code>string</code> | <code>null</code> | The avatar of the user |
| email | <code>string</code> | <code>null</code> | The email of the user |
| defaultOrganisation | <code>string</code> | <code>null</code> | The default organisation of the user |
| type | <code>string</code> | <code>null</code> | The default profile of the user |

<a name="User+delete"></a>

### user.delete(id) ⇒ <code>Promise</code>
Delete an user by id

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that contains the deleted user  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the user |

<a name="User+setOrganisations"></a>

### user.setOrganisations(id, organisations) ⇒ <code>Promise</code>
Set user organisation

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that contains the updated user  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the user |
| organisations | <code>Array.&lt;string&gt;</code> | The organisations of the user |

<a name="User+setPassword"></a>

### user.setPassword(id, password) ⇒ <code>Promise</code>
Set user password

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that contains the updated user  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the user |
| password | <code>string</code> | The password of the user |

<a name="User+changePassword"></a>

### user.changePassword(id, oldPassword, newPassword) ⇒ <code>Promise</code>
Change user password

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that contains the updated user  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the user |
| oldPassword | <code>string</code> | The old password of the user |
| newPassword | <code>string</code> | The new password of the user |

<a name="User+getApiKeys"></a>

### user.getApiKeys(id) ⇒ <code>Promise</code>
Get user api keys

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that contains the api keys of the user  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the user |

<a name="User+removeApiKey"></a>

### user.removeApiKey(id) ⇒ <code>Promise</code>
Remove user api key

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that contains the api keys of the user  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the user |

<a name="User+renewApiKey"></a>

### user.renewApiKey(id) ⇒ <code>Promise</code>
Renew user api key

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that contains the api keys of the user  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the user |

<a name="User+getAvatar"></a>

### user.getAvatar(id) ⇒ <code>Promise</code>
Get user avatar

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that contains the avatar of the user  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the user |

<a name="query"></a>

## query(query)
A function to execute a query on thehive

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | The query to execute |

