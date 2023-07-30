# TheHive4Nodejs
Nodejs module to interact with your TheHive5 instance

<p align="center">
    <img src="./.github/logo.png">
</p>

# Docs
## Classes

<dl>
<dt><a href="#Case">Case</a></dt>
<dd><p>This class is used to interact with the case API</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#query">query(query)</a></dt>
<dd><p>A function to execute a query on thehive</p>
</dd>
</dl>

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

<a name="query"></a>

## query(query)
A function to execute a query on thehive

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | The query to execute |

