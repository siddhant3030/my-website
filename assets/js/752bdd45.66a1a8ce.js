"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8845],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={},r=void 0,l={unversionedId:"Glific Documentation/Reporting and Analytics/Making custom reports on DataStudio",id:"Glific Documentation/Reporting and Analytics/Making custom reports on DataStudio",title:"Making custom reports on DataStudio",description:"Overview",source:"@site/docs/Glific Documentation/5. Reporting and Analytics/03. Making custom reports on DataStudio.md",sourceDirName:"Glific Documentation/5. Reporting and Analytics",slug:"/Glific Documentation/Reporting and Analytics/Making custom reports on DataStudio",permalink:"/my-website/docs/Glific Documentation/Reporting and Analytics/Making custom reports on DataStudio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Glific Documentation/5. Reporting and Analytics/03. Making custom reports on DataStudio.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integrate DataStudio to create visualizations & reports",permalink:"/my-website/docs/Glific Documentation/Reporting and Analytics/Integrate DataStudio to create visualizations & reports"},next:{title:"Populate data in Field Views (User info) report.",permalink:"/my-website/docs/Glific Documentation/Reporting and Analytics/Populate data in Field Views (User info) report."}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"What&#39;s being reported in the current reports?",id:"whats-being-reported-in-the-current-reports",level:2},{value:"Adding template to new report page",id:"adding-template-to-new-report-page",level:2},{value:"Connecting to new data sources from report page",id:"connecting-to-new-data-sources-from-report-page",level:2},{value:"Working with fields, metrics, dimensions and filters",id:"working-with-fields-metrics-dimensions-and-filters",level:2},{value:"Creating calculated fields",id:"creating-calculated-fields",level:2},{value:"Creating Filters",id:"creating-filters",level:2},{value:"Working with grouped data",id:"working-with-grouped-data",level:2},{value:"Creating Views",id:"creating-views",level:2},{value:"Managing views/queries - changing names and data types",id:"managing-viewsqueries---changing-names-and-data-types",level:2},{value:"Styling the graphs",id:"styling-the-graphs",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This document is meant to guide organisations to build custom dashboards either entirely from scratch or build on top of the existing reports provided by Glific."),(0,o.kt)("p",null,"In order to keep things simple, all steps that will be described below will be in reference to the existing reports but they can be extended to build reports or dashboards from scratch as well."),(0,o.kt)("p",null,"The existing reports are built keeping in mind some of the general monitoring and evaluation metrics that organisations would like to keep a track of either on a weekly or daily basis."),(0,o.kt)("p",null,"These reports include information on daily activity status, engagement metrics, frequency of interactions and user information all within different pages of the reports."),(0,o.kt)("p",null,"The reports can be used as is or customised to the organisation\u2019s liking by adding more data sources, blending different data views/tables together in existing or new pages of the report."),(0,o.kt)("h2",{id:"whats-being-reported-in-the-current-reports"},"What","'","s being reported in the current reports?"),(0,o.kt)("p",null,"In the current version of the report (v3.0) you will find the following pages -"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Daily Status :")," Gives an overall view of the total number of active contacts and messages sent by the users each day. It also gives a breakdown of the number of active contacts and messages by hour in order to evaluate time-based factors that might be impacting engagement"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Flow Reports :")," This page gives a breakdown of the user engagement per flow. The charts included within this report give an overview of the number of times a user has requested a particular activity or flow or provided feedback on an activity."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sessions :")," The sessions page gives total and average number of sessions (flows) initiated by the user. It also gives a breakdown of the frequency of interactions per user, average time spent on flow per user and the average number of messages sent by the user for each flow."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Contact Details :")," All contact details collected by the organisation can be visualised in this view of the report."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Field Views (User Details) :")," Additional page to visualise contact details that makes use of a stored procedure in Bigquery meant to unnest all the fields level information that the organisation is collecting in their flows and mapping them back to the contact details ",(0,o.kt)("a",{parentName:"p",href:"https://glific.slab.com/posts/8czsquxw"},"Capturing data for reports ","&"," analytics")),(0,o.kt)("p",null,"All the reports above can be filtered as per date, time, flow name, flow label (activity/feedback etc.) and contact details."),(0,o.kt)("h1",{id:"getting-started-"},"Getting Started :"),(0,o.kt)("h2",{id:"adding-template-to-new-report-page"},"Adding template to new report page"),(0,o.kt)("p",null,"Once you have made a copy of the existing reports and made connections to your data sources by following the steps in this report - *",(0,o.kt)("strong",{parentName:"p"},"* ["),"Integrate DataStudio to create visualisations ","&"," reports",(0,o.kt)("strong",{parentName:"p"},"](",(0,o.kt)("a",{parentName:"strong",href:"https://glific.slab.com/posts/vzlvtpuw"},"https://glific.slab.com/posts/vzlvtpuw"),")  "),",** you are now all set to customise existing pages or add new pages."),(0,o.kt)("p",null,"In order to add a new page,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"Pages")," on the header "),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"New Page"),"  (you can even duplicate an earlier page by clicking on ",(0,o.kt)("inlineCode",{parentName:"li"},"Duplicate Page")," and customise it as per your requirements)")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/rTIao5Fp928vBUvPvPNMJCMh.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Rename")," the report by clicking on the Page (Number) from the header panel and selecting the 3 dots beside the current report name")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/yJCmhigvU_yuHbnF-n2ZXjlQ.png",alt:null})),(0,o.kt)("p",null,"An empty page will be created without the source template. In order to add the source template -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Multi-select all the rectangles, texts and filters from the template that you would like to be copied from a previous page"),(0,o.kt)("li",{parentName:"ol"},"Right click on the selection and click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Make report-level"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/jAyaI9uiQm3HKjVODh7yjpzs.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/w9q1Xy6sfcetWBdCMxmKqjH7.png",alt:null})),(0,o.kt)("p",null,"You are now ready to add data sources and charts to your new report page."),(0,o.kt)("h2",{id:"connecting-to-new-data-sources-from-report-page"},"Connecting to new data sources from report page"),(0,o.kt)("p",null,"Every report page has a pre-selected data source which can be changed. If you want to select a source from  already connected data sources or if you want to include a new custom query or data source from your BigQuery Console -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Add Data")," option available on the header panel")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/ZcpPiM83cWFZX97eWrjfvOSb.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Bigquery")," connector")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/85eobNnuMbl089SGEp2abO5G.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"project")," that contains your datasets"),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Glific dataset")),(0,o.kt)("li",{parentName:"ol"},"Choose from the list of available data sources")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/bu5pntiMN_tLGw3069p0luCr.png",alt:null})),(0,o.kt)("p",null,"Or you could also -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a dummy chart and then click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Edit Data Source")," (pen icon) in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Data Source")," section of the right data pane"),(0,o.kt)("li",{parentName:"ol"},"Select the data source from the list of connected data sources after the BigQuery connector automatically opens to your project")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/fENk376HiExB4XuTz1kYXnDf.png",alt:null})),(0,o.kt)("h2",{id:"working-with-fields-metrics-dimensions-and-filters"},"Working with fields, metrics, dimensions and filters"),(0,o.kt)("p",null,"When working with charts, the right data pane gives you options to change ",(0,o.kt)("strong",{parentName:"p"},"dimension"),", ",(0,o.kt)("strong",{parentName:"p"},"metrics"),", ",(0,o.kt)("strong",{parentName:"p"},"define custom fields")," and ",(0,o.kt)("strong",{parentName:"p"},"add filters")," to organise data in a certain way. Here is a complete breakdown of all the available options -"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fields :")," Fields are the columns that appear in your connected dataset"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Date Range Dimension :")," As the name suggests, this option lets you specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"datetime")," field within your dataset and can be used to plot time-series charts and graphs. Specifying the date dimension also lets the user further filter as per month, week, day, hour and so on"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Dimension :")," Dimensions describe or categorize your data. Adding dimensions to a chart groups the data by those dimensions. Time, flow name, city, student\u2019s age are all examples of dimensions you could use to group the information in your chart. \xa0Note that any type of data can be a dimension, including a column of unaggregated numbers"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Metrics :")," Metrics measure your dimensions. A metric is the result of applying an aggregation to a set of values. That aggregation could come from the underlying data set, or be the result of implicitly or explicitly applying an aggregation function, such as ",(0,o.kt)("strong",{parentName:"p"},"COUNT()"),", ",(0,o.kt)("strong",{parentName:"p"},"SUM()"),", or ",(0,o.kt)("strong",{parentName:"p"},"AVG()")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note about Dimensions and metrics in your data source :")," When you connect to your data in Data Studio, you","'","ll see the list of fields along with their default properties, as shown below. ",(0,o.kt)("strong",{parentName:"p"},"Dimensions")," (unaggregated columns that you can group by) appear as green fields. ",(0,o.kt)("strong",{parentName:"p"},"Metrics")," (aggregated data) appear as blue fields"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters :")," Parameters store user-defined data. Unlike dimensions and metrics, which get their information from the underlying data set, parameters get their information from users. Parameters can then be used to customise or personalised your reports and data sources"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Calculated Fields :")," Calculated fields let you create new fields derived from your data. Calculated fields appear in the field list with ",(0,o.kt)("inlineCode",{parentName:"p"},"fx")," at the end"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Filters :")," There are two types of filters that can be added to the report, one at a page level, also called as a control and the other at a chart level which is available as an option in the right data panel after a chart is added. Both filters work essentially the same way and can be used to visualise only a portion of the data"),(0,o.kt)("h2",{id:"creating-calculated-fields"},"Creating calculated fields"),(0,o.kt)("p",null,"In order to create a calculated field -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on either dimension or metrics in the right data pane and select ",(0,o.kt)("inlineCode",{parentName:"li"},"Create Field")," at the very bottom of the drop-down list")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/A05U0kZ6aQRTF1UHBuhnxPMh.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the formula text box, specify the condition using which you want the new field to be created. The formula takes in all SQL functions. Some examples in which this could be used include ",(0,o.kt)("strong",{parentName:"li"},"HOUR(inserted_at)")," to extract only the HOUR information from the datetime column or doing a CASE WHEN to specify \u201cMale\u201d or \u201cFemale\u201d instead of a \u201c1\u201d or \u201c2\u201d from the original data source. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/VuiZuRE_GARIb_2-0gUNfgxo.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Provide the calculated field with a name and data type and then select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Apply")," button. ")),(0,o.kt)("h2",{id:""}),(0,o.kt)("h2",{id:"creating-filters"},"Creating Filters"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Creating page-level filters :")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select on ",(0,o.kt)("inlineCode",{parentName:"li"},"Add a control")," option from the top header panel")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/AlntdXtu_gHKhNkrHx9Q7uK1.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the type of filter you want to add from the page. The available filters include options like sliders to filter numeric data types, checkboxes to select only boolean values or drop down list to filter as per dimensions available in a specific column of the dataset. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/_9ZDeSBwjq63qSlkchSsZZ_u.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Adjust the shape and position of the filter within your report"),(0,o.kt)("li",{parentName:"ol"},"Select the column using which the data needs to be filtered from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Control Field")," option available in the right data pane. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/YENM3SZHCU-jMZcL8C5V7qWm.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make adjustments to the ",(0,o.kt)("strong",{parentName:"li"},"metric"),", ",(0,o.kt)("strong",{parentName:"li"},"order"),", ",(0,o.kt)("strong",{parentName:"li"},"range")," etc. as necessary based on the type of filter selected")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Creating chart-level filters")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"After adding a chart, scroll to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Filter")," section of the right data pane.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/2NygSXb-QeDGNoT5y7yJov6U.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Add a filter")),(0,o.kt)("li",{parentName:"ol"},"Filters are usually of two types - ",(0,o.kt)("strong",{parentName:"li"},"Include")," or ",(0,o.kt)("strong",{parentName:"li"},"Exclude"),". Select whether you want to include or exclude certain dimensions or types of values (NULLs) from your data")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/TN41MAp2ruEamkW4nm0eQ1nE.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the field which has the dimension or value that needs to be filtered"),(0,o.kt)("li",{parentName:"ol"},"Select a filtering condition. This can include filtering based on partial or full matching with the column value or filtering null values or values that start with a certain value.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/m4hv505VSG2ZZTocLbzy-QfY.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Type in the keywords for which the filtering condition needs to be applied")),(0,o.kt)("h2",{id:"-1"}),(0,o.kt)("h2",{id:"working-with-grouped-data"},"Working with grouped data"),(0,o.kt)("p",null,"In certain cases, you might be interested in working with averages such as per user per flow average times or with grouped data such as combining contacts and messages tables together and grouping them to visualise the number of messages sent by users."),(0,o.kt)("p",null,"These manipulations are not directly available in the backend tables and might get a little tricky to work with if you are building custom fields since Data Studio does not support group by functions in the formula box for calculated fields."),(0,o.kt)("p",null,"In such cases, it is advisable to either select the table visualisations where you can add multiple grouped dimensions and visualise the number of records for such groupings. For example, if you wish to get the number of flows requested by a user per day, you could -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Table with Bars")," chart from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Add A Chart")," option in the top header panel")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/y-VsFUYcWjchhpHSCrg_IY7g.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add dimensions for ",(0,o.kt)("inlineCode",{parentName:"li"},"Date")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Phone")," in the right data pane to create the groupings ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/MVC9YVp1pSZAXaZCtEZumLY3.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"flow_label")," metric and choose the ",(0,o.kt)("strong",{parentName:"li"},"SUM")," aggregation to get the total number of activities requested per user per day")),(0,o.kt)("h2",{id:"creating-views"},"Creating Views"),(0,o.kt)("p",null,"The other way to deal with averages or with grouped data is to create ",(0,o.kt)("strong",{parentName:"p"},"views")," from backend tables and add them as data sources within your reports. You can create views directly from Data Studio in the following way"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Add A Data")," option in the top header panel "),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Bigquery")," connector"),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Custom Query")," option and then select your ",(0,o.kt)("strong",{parentName:"li"},"project")," and ",(0,o.kt)("strong",{parentName:"li"},"dataset name")),(0,o.kt)("li",{parentName:"ol"},"Type or paste your view query in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Enter Custom Query")," text  box"),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Add")," after you are done ")),(0,o.kt)("p",null,"The views currently in use include Flat Fields available in your Bigquery Console along with UserSessions and ContactMessages available within Datastudio (Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Resource")," ",">"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage added data sources")," in your Datastudio report to view them)"),(0,o.kt)("h2",{id:"managing-viewsqueries---changing-names-and-data-types"},"Managing views/queries - changing names and data types"),(0,o.kt)("p",null,"The default name given to a query or a view when it","'","s created is ",(0,o.kt)("strong",{parentName:"p"},"Bigquery"),". You might want to give this particular view/query a name in order to manage it across multiple pages of the report."),(0,o.kt)("p",null,"You can also make data type changes after you have created the view/query if you haven","'","t already done so while creating it. In order to make name or data type changes -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Resource")," option from the header panel of Datastudio "),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Manage Added Data Sources"),"option ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/WYyaSx7r41cg61g3pqWdlbvJ.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the data source that has the name \u201cBigquery\u201d and click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Edit")," option beside it")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/8b75dwSXo944_rG5QwaESmhF.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Double click on the current view/query name at the top of the ",(0,o.kt)("inlineCode",{parentName:"li"},"edit")," box and change the name ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/WAcUb3_0rgWAGJ_QPk6tr6pG.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In order to change the data type, navigate to the field to be changed and select the data type from the drop-down list from either ",(0,o.kt)("strong",{parentName:"li"},"Number"),", ",(0,o.kt)("strong",{parentName:"li"},"Text"),", ",(0,o.kt)("strong",{parentName:"li"},"Geolocation"),", ",(0,o.kt)("strong",{parentName:"li"},"Boolean")," etc")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/CDcknLHv4fgggbqkDhGK1ZJ-.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Done")," button in the top right corner of the editing box after you have made all the changes ")),(0,o.kt)("h2",{id:"styling-the-graphs"},"Styling the graphs"),(0,o.kt)("p",null,"After you are done adding data sources, creating new views, adding graphs etc. it is time to style them as per your report."),(0,o.kt)("p",null,"Each graph has its own styling criteria. A ",(0,o.kt)("strong",{parentName:"p"},"bar graph")," may have an option to change the orientation, i.e, vertical or horizontal orientation whereas a ",(0,o.kt)("strong",{parentName:"p"},"pie chart")," gives you an option to select the number of total slices (if the data was numeric)."),(0,o.kt)("p",null,"The styling depends on your use-case and there is no hard and fast rule as to how you would like to present the data."),(0,o.kt)("p",null,"You may however want to adjust the colors of the graphs/charts based on the template colors you are using. This can be done through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Color")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Background and Border")," sections within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Styling")," tab."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/bIs-Vgq21fg5A7-1bbW2BnBx.png",alt:null})),(0,o.kt)("p",null,"You can also ",(0,o.kt)("strong",{parentName:"p"},"add"),"  ",(0,o.kt)("strong",{parentName:"p"},"labels")," to the chart and adjust the ",(0,o.kt)("strong",{parentName:"p"},"font size")," and color of the labels. The other thing you might want to try is making text/orientation changes to the legend of the graph. The changes are automatically saved."),(0,o.kt)("p",null,"Once you are done styling the pages and the graphs, you have your organisation level reports ready to be viewed or shared."),(0,o.kt)("p",null,"For more details on creating reports, refer to the following links -"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/embed/sTgquLn4VVM?showinfo=0"},"https://www.youtube.com/embed/sTgquLn4VVM?showinfo=0")),(0,o.kt)("p",null,"Configure dimensions and metrics : ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/datastudio/answer/6402048?hl=en"},"https://support.google.com/datastudio/answer/6402048?hl=en")),(0,o.kt)("p",null,"About calculated fields : ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/datastudio/answer/6299685?hl=en"},"https://support.google.com/datastudio/answer/6299685?hl=en")),(0,o.kt)("p",null,"Working with filters : ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/datastudio/answer/6291066?hl=en"},"https://support.google.com/datastudio/answer/6291066?hl=en")),(0,o.kt)("p",null,"Configure chart components : ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/datastudio/answer/6291062?hl=en"},"https://support.google.com/datastudio/answer/6291062?hl=en")))}u.isMDXComponent=!0}}]);