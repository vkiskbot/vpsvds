(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);a(66),a(91);var n=a(0),r=a.n(n),s=a(38),i=a.n(s),o=a(18),c=a.n(o),l=a(19),u=a(20),p=a(22),m=a(21),h=a(23),v=a(7),f=a(1),_=(a(62),a(63),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={activeTab:"",page:1,activeTabView:"view_cell"},a.props.app.homeTab?a.state.activeTab=a.props.app.homeTab:a.state.activeTab="",a.props.app.homePage&&(a.state.page=a.props.app.homePage),a.props.app.homeTabView?a.state.homeTabView=a.props.app.homeTabView:a.state.activeTabView="view_cell",a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onChangeGroup",value:function(e){this.setState({group_id:e.target.value})}},{key:"onChangePrice",value:function(e){this.setState({price:e.target.value})}},{key:"onChangeReach",value:function(e){this.setState({stats_reach:e.target.value})}},{key:"onChangeViews",value:function(e){this.setState({stats_views:e.target.value})}},{key:"onChangeRevenue",value:function(e){this.setState({revenue:e.target.value})}},{key:"onChangeCategory",value:function(e){this.setState({category:e.target.value})}},{key:"render",value:function(){var e=this;return this.props.activeTab&&this.setState({activeTab:this.props.activeTab}),r.a.createElement(f.Panel,{id:this.props.id},r.a.createElement(f.PanelHeader,{noShadow:!0},"\u041f\u043e\u0438\u0441\u043a VDS, Dedicated \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432"),r.a.createElement(f.Group,null,r.a.createElement(f.FixedLayout,{noShadow:!0,vertical:"top"},r.a.createElement(f.Tabs,{theme:"header",type:"buttons"},r.a.createElement(f.HorizontalScroll,null,r.a.createElement(f.TabsItem,{onClick:function(){e.setState({activeTab:"vps"}),e.props.app.homeTab="vps"},selected:"vps"===this.state.activeTab},"VPS"),r.a.createElement(f.TabsItem,{onClick:function(){e.setState({activeTab:"dedic"}),e.props.app.homeTab="dedic"},selected:"dedic"===this.state.activeTab},"Dedicated")))),""!==this.state.activeTab&&r.a.createElement(f.Group,{style:{marginTop:60}},r.a.createElement(f.Tabs,{theme:"light"},r.a.createElement(f.TabsItem,{onClick:function(){e.setState({activeTabView:"view_cell"}),e.props.app.homeTabView="view_cell"},selected:"view_cell"===this.state.activeTabView},"\u0421\u043f\u0438\u0441\u043e\u043a"),r.a.createElement(f.TabsItem,{onClick:function(){e.setState({activeTabView:"view_table"}),e.props.app.homeTabView="view_table"},selected:"view_table"===this.state.activeTabView},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430"))),"vps"===this.state.activeTab&&r.a.createElement(f.Div,{style:{marginTop:10}},r.a.createElement(f.Button,{size:"xl",onClick:this.props.go,"data-to":"filtervps",style:{cursor:"pointer"}},"\u0424\u0438\u043b\u044c\u0442\u0440")),"vps"===this.state.activeTab&&this.props.app.tariffs.length>0&&"view_table"!==this.state.activeTabView&&""!==this.state.activeTab&&r.a.createElement(f.Group,{title:this.props.app.tariffs.length?"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0430\u0440\u0438\u0444\u043e\u0432":"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0430\u0440\u0438\u0444\u043e\u0432 \u043f\u0443\u0441\u0442"},r.a.createElement(f.Group,null,this.props.app.tariffs.map(function(e,t){return r.a.createElement(f.Div,null,"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f: ",e.companyname,r.a.createElement(f.Cell,{photo:e.url_logo,before:r.a.createElement(f.Avatar,{src:e.url_logo,size:80}),description:e.companyname,size:"l"},"\u0414\u0438\u0441\u043a: ",e.diskvalue," \u0413\u0431",r.a.createElement("br",null),"\u041e\u0417\u0423: ",e.ramvalue," \u041c\u0431",r.a.createElement("br",null),"\u0427\u0430\u0441\u0442\u043e\u0442\u0430 CPU: ",e.cpuhz,r.a.createElement("br",null),"\u042f\u0434\u0435\u0440: ",e.cpucount," \u0448\u0442.",r.a.createElement("br",null),"\u0421\u0442\u0440\u0430\u043d\u044b: ",e.country,r.a.createElement("br",null),"\u0426\u0435\u043d\u0430: ",e.price," \u0440\u0443\u0431",r.a.createElement("br",null),r.a.createElement(f.Div,{style:{height:7,padding:0}}),r.a.createElement("a",{href:e.affurl_vps,target:"_blank"},r.a.createElement(f.Button,{size:"m"},"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c")),r.a.createElement(f.Div,{style:{height:7,padding:0}})))}))),"vps"===this.state.activeTab&&this.props.app.tariffs.length>0&&"view_table"===this.state.activeTabView&&""!==this.state.activeTab&&r.a.createElement(f.Group,{title:this.props.app.tariffs.length?"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0430\u0440\u0438\u0444\u043e\u0432":"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0430\u0440\u0438\u0444\u043e\u0432 \u043f\u0443\u0441\u0442"},r.a.createElement(f.Div,{disabled:!this.props.app.tariffs,style:{marginTop:25}},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f"),r.a.createElement("th",null,"\u0414\u0438\u0441\u043a \u0413\u0431"),r.a.createElement("th",null,"\u041e\u0417\u0423 \u041c\u0431"),r.a.createElement("th",null,"\u041a\u043e\u043b-\u0432\u043e \u044f\u0434\u0435\u0440 CPU"),r.a.createElement("th",null,"\u0422\u0440\u0430\u0444\u0438\u043a"),r.a.createElement("th",null,"\u0412\u0438\u0440\u0442\u0443\u0430-\u043b\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("th",null,"\u0421\u0442\u0440\u0430\u043d\u0430"),r.a.createElement("th",null,"\u0426\u0435\u043d\u0430 \u0440\u0443\u0431"),r.a.createElement("th",null,"\u0421\u0441\u044b\u043b\u043a\u0430"))),this.props.app.tariffs&&this.props.app.tariffs.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.companyname),r.a.createElement("td",null,e.diskvalue),r.a.createElement("td",null," ",e.ramvalue),r.a.createElement("td",null," ",e.cpucount),r.a.createElement("td",null,e.trafficlimit),r.a.createElement("td",null,e.virtualize),r.a.createElement("td",null," ",e.country),r.a.createElement("td",null," ",e.price),r.a.createElement("td",null," ",r.a.createElement("a",{href:e.affurl_vps,target:"_blank"},"\u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c")))})))),"dedic"===this.state.activeTab&&r.a.createElement(f.Div,{style:{marginTop:10}},"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435")))}}]),t}(r.a.Component)),d=a(9),g=a(64),b=a.n(g),k=a(39),E=a.n(k),y=Object(f.platform)(),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleFilter=function(){for(var e=Object(v.a)(Object(v.a)(a)),t=e.props.app.tariffs,n=[],r=0,s=0;s<t.length;s++){parseInt(e.state.price_from)>0&&parseInt(t[s].price)<parseInt(e.state.price_from)||(parseInt(e.state.price_to)>0&&parseInt(t[s].price)>parseInt(e.state.price_to)||parseInt(e.state.ramvalue_from)>0&&parseInt(t[s].ramvalue)<parseInt(e.state.ramvalue_from)||parseInt(e.state.ramvalue_to)>0&&parseInt(t[s].price)>parseInt(e.state.ramvalue_to)||parseInt(e.state.diskvalue_from)>0&&parseInt(t[s].diskvalue)<parseInt(e.state.diskvalue_from)||parseInt(e.state.diskvalue_to)>0&&parseInt(t[s].diskvalue)>parseInt(e.state.diskvalue_to)||parseInt(e.state.cpucount_from)>0&&parseInt(t[s].cpucount)<parseInt(e.state.cpucount_from)||parseInt(e.state.cpucount_to)>0&&parseInt(t[s].cpucount)>parseInt(e.state.cpucount_to)||(n[r]=t[s],r++))}e.props.app.setTariffs(n),e.props.app.setFiltersVPS(e.state),e.props.app.goByName("home");var i={action:"get_vps_arr1",array:e.state},o=new FormData;o.append("json",JSON.stringify(i)),fetch("https://zakupi.club/telegram_bot/bot_vpsvds/ajax_vps.php",{method:"POST",body:o}).then(function(e){return e.json()}).then(function(e){e.success})},a.state={price_from:1,diskvalue_from:1,ramvalue_from:256,cpucount_from:1},a.tariffsvps=[],a.tariffsvpssav=[],a.groups_by_ids=[],a.state=a.props.app.filtersvps,a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"onChangeDiskFrom_DEL",value:function(e){var t=e.target.value.replace(/[^0-9]/g,"");t=parseInt(t),this.setState({diskvalue_from:t}),this.state.diskvalue_to<t&&this.setState({diskvalue_to:t})}},{key:"onChangeDiskTo_DEL",value:function(e){var t=e.target.value.replace(/[^0-9]/g,"");t=parseInt(t),this.setState({diskvalue_to:t}),this.state.diskvalue_from>t&&this.setState({diskvalue_from:t})}},{key:"checkDiscTo",value:function(e){this.state.diskvalue_from>this.state.diskvalue_to&&this.setState({diskvalue_from:this.state.diskvalue_to})}},{key:"checkDiscFrom",value:function(e){this.state.diskvalue_from>this.state.diskvalue_to&&this.setState({diskvalue_to:this.state.diskvalue_from})}},{key:"checkRamTo",value:function(e){this.state.ramvalue_from>this.state.ramvalue_to&&this.setState({ramvalue_from:this.state.ramvalue_to})}},{key:"checkRamFrom",value:function(e){this.state.ramvalue_from>this.state.ramvalue_to&&this.setState({ramvalue_to:this.state.ramvalue_from})}},{key:"checkCpuCountTo",value:function(e){this.state.cpucount_from>this.state.cpucount_to&&this.setState({cpucount_from:this.state.cpucount_to})}},{key:"checkCpuCountFrom",value:function(e){this.state.cpucount_from>this.state.cpucount_to&&this.setState({cpucount_to:this.state.cpucount_from})}},{key:"checkPriceTo",value:function(e){this.state.price_from>this.state.price_to&&this.setState({price_from:this.state.price_to})}},{key:"checkPriceFrom",value:function(e){this.state.price_from>this.state.price_to&&this.setState({price_to:this.state.price_from})}},{key:"onChangePriceFrom",value:function(e){var t=e.target.value.replace(/[^0-9]/g,"");this.setState({price_from:t})}},{key:"onChangeReachFrom",value:function(e){this.setState({stats_reach_from:e.target.value})}},{key:"onChangeViewsFrom",value:function(e){this.setState({stats_views_from:e.target.value})}},{key:"onChangeRevenueFrom",value:function(e){var t=e.target.value.replace(/[^0-9]/g,"");this.setState({revenue_from:t})}},{key:"onChangeExpenseFrom",value:function(e){var t=e.target.value.replace(/[^0-9]/g,"");this.setState({expense_from:t})}},{key:"onChangeMembersFrom",value:function(e){var t=e.target.value.replace(/[^0-9]/g,"");this.setState({members_from:t})}},{key:"onChangePriceTo",value:function(e){var t=e.target.value.replace(/[^0-9]/g,"");this.setState({price_to:t})}},{key:"onChangeReachTo",value:function(e){this.setState({stats_reach_to:e.target.value})}},{key:"onChangeViewsTo",value:function(e){this.setState({stats_views_to:e.target.value})}},{key:"onChangeRevenueTo",value:function(e){var t=e.target.value.replace(/[^0-9]/g,"");this.setState({revenue_to:t})}},{key:"onChangeExpenseTo",value:function(e){var t=e.target.value.replace(/[^0-9]/g,"");this.setState({expense_to:t})}},{key:"onChangeMembersTo",value:function(e){var t=e.target.value.replace(/[^0-9]/g,"");this.setState({members_to:t})}},{key:"onChangeCategory",value:function(e){this.setState({category:e.target.value})}},{key:"onChangeKeywords",value:function(e){this.setState({keywords:e.target.value})}},{key:"options",value:function(){for(var e=[],t=0;t<=10;t+=2)e.push(r.a.createElement("option",{value:"".concat(t/10),key:"".concat(t)},t/10));return e}},{key:"render",value:function(){var e,t,a,n,s=this;return r.a.createElement(f.Panel,{id:this.props.id},r.a.createElement(f.PanelHeader,{left:r.a.createElement(f.HeaderButton,{onClick:this.props.go,"data-to":"home"},y===f.IOS?r.a.createElement(b.a,null):r.a.createElement(E.a,null))},"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c"),r.a.createElement(f.FormLayout,null,r.a.createElement(f.Group,null,r.a.createElement(f.Div,null,r.a.createElement(f.Group,{title:"\u0414\u0438\u0441\u043a\u043e\u0432\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e (\u0413\u0431)"},r.a.createElement(f.Gallery,(e={slideWidth:"custom"},Object(d.a)(e,"slideWidth","50%"),Object(d.a)(e,"style",{height:120}),e),r.a.createElement(f.Div,{style:{width:"90%"}},r.a.createElement(f.Slider,{min:1,max:1e3,value:Number(this.state.diskvalue_from),onChange:(this.checkDiscTo(this.state.diskvalue_from),function(e){return s.setState({diskvalue_from:e})}),top:"\u0414\u0438\u0441\u043a \u043e\u0442"}),r.a.createElement(f.Input,{size:"30",value:parseInt(this.state.diskvalue_from),onChange:(this.checkDiscTo(this.state.diskvalue_from),function(e){return s.setState({diskvalue_from:e.target.value})}),type:"number"}),r.a.createElement(f.Div,{style:{align:"center"}},"\u0414\u0438\u0441\u043a \u043e\u0442 (\u0413\u0431)")),r.a.createElement(f.Div,{style:{width:"90%"}},r.a.createElement(f.Slider,{min:1,max:1e3,value:Number(this.state.diskvalue_to),onChange:(this.checkDiscFrom(this.state.diskvalue_to),function(e){return s.setState({diskvalue_to:e})}),top:"\u0414\u0438\u0441\u043a \u0434\u043e"}),r.a.createElement(f.Input,{value:parseInt(this.state.diskvalue_to),onChange:(this.checkDiscFrom(this.state.diskvalue_to),function(e){return s.setState({diskvalue_to:e.target.value})}),type:"number"}),r.a.createElement(f.Div,{style:{align:"center"}},"\u0414\u0438\u0441\u043a \u0434\u043e (\u0413\u0431)"))),r.a.createElement(f.Div,{title:"\u0422\u0438\u043f \u0434\u0438\u0441\u043a\u0430"},r.a.createElement(f.Div,{class:"Header__content"}," \u0422\u0438\u043f \u0434\u0438\u0441\u043a\u0430:"),r.a.createElement(f.Select,null,r.a.createElement("option",null,"SSD"),r.a.createElement("option",null,"SAS"))),r.a.createElement(f.Group,{title:"\u041a\u043e\u043b-\u0432\u043e \u041e\u0417\u0423 (\u041c\u0431)"},r.a.createElement(f.Gallery,(t={slideWidth:"custom"},Object(d.a)(t,"slideWidth","50%"),Object(d.a)(t,"style",{height:120}),t),r.a.createElement(f.Div,{style:{width:"90%"}},r.a.createElement(f.Slider,{min:256,max:65536,value:Number(this.state.ramvalue_from),onChange:(this.checkRamTo(this.state.ramvalue_from),function(e){return s.setState({ramvalue_from:e})}),top:"\u0414\u0438\u0441\u043a \u043e\u0442"}),r.a.createElement(f.Input,{size:"30",value:parseInt(this.state.ramvalue_from),onChange:(this.checkRamTo(this.state.ramvalue_from),function(e){return s.setState({ramvalue_from:e.target.value})}),type:"number"}),r.a.createElement(f.Div,{style:{align:"center"}},"\u041e\u0417\u0423 \u043e\u0442 (\u041c\u0431)")),r.a.createElement(f.Div,{style:{width:"90%"}},r.a.createElement(f.Slider,{min:256,max:65536,value:Number(this.state.ramvalue_to),onChange:(this.checkRamFrom(this.state.ramvalue_to),function(e){return s.setState({ramvalue_to:e})}),top:"\u0414\u0438\u0441\u043a \u0434\u043e"}),r.a.createElement(f.Input,{value:parseInt(this.state.ramvalue_to),onChange:(this.checkRamFrom(this.state.ramvalue_to),function(e){return s.setState({ramvalue_to:e.target.value})}),type:"number"}),r.a.createElement(f.Div,{style:{align:"center"}},"\u041e\u0417\u0423 \u0434\u043e (\u041c\u0431)"))),r.a.createElement(f.Group,{title:"\u041a\u043e\u043b-\u0432\u043e \u044f\u0434\u0435\u0440 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430 (\u0448\u0442)"},r.a.createElement(f.Gallery,(a={slideWidth:"custom"},Object(d.a)(a,"slideWidth","50%"),Object(d.a)(a,"style",{height:120}),a),r.a.createElement(f.Div,{style:{width:"90%"}},r.a.createElement(f.Slider,{min:1,max:32,value:Number(this.state.cpucount_from),onChange:(this.checkCpuCountTo(this.state.cpucount_from),function(e){return s.setState({cpucount_from:e})})}),r.a.createElement(f.Input,{size:"30",value:parseInt(this.state.cpucount_from),onChange:(this.checkCpuCountTo(this.state.cpucount_from),function(e){return s.setState({cpucount_from:e.target.value})}),type:"number"}),r.a.createElement(f.Div,{style:{align:"center"}},"\u042f\u0434\u0435\u0440 \u043e\u0442 (\u0448\u0442)")),r.a.createElement(f.Div,{style:{width:"90%"}},r.a.createElement(f.Slider,{min:1,max:32,value:Number(this.state.cpucount_to),onChange:(this.checkCpuCountFrom(this.state.cpucount_to),function(e){return s.setState({cpucount_to:e})}),top:"\u042f\u0434\u0435\u0440 \u0426\u041f\u0423 \u0434\u043e"}),r.a.createElement(f.Input,{value:parseInt(this.state.cpucount_to),onChange:(this.checkCpuCountFrom(this.state.cpucount_to),function(e){return s.setState({cpucount_to:e.target.value})}),type:"number"}),r.a.createElement(f.Div,{style:{align:"center"}},"\u042f\u0434\u0435\u0440 \u0434\u043e (\u0448\u0442)"))),r.a.createElement(f.Group,{title:"\u0426\u0435\u043d\u0430 (\u0440\u0443\u0431)"},r.a.createElement(f.Gallery,(n={slideWidth:"custom"},Object(d.a)(n,"slideWidth","50%"),Object(d.a)(n,"style",{height:120}),n),r.a.createElement(f.Div,{style:{width:"90%"}},r.a.createElement(f.Slider,{min:1,max:3e4,value:Number(this.state.price_from),onChange:(this.checkPriceTo(this.state.price_from),function(e){return s.setState({price_from:e})})}),r.a.createElement(f.Input,{size:"30",value:parseInt(this.state.price_from),onChange:(this.checkPriceTo(this.state.price_from),function(e){return s.setState({price_from:e.target.value})}),type:"number"}),r.a.createElement(f.Div,{style:{align:"center"}},"\u0426\u0435\u043d\u0430 \u043e\u0442 (\u0440\u0443\u0431)")),r.a.createElement(f.Div,{style:{width:"90%"}},r.a.createElement(f.Slider,{min:1,max:3e4,value:Number(this.state.price_to),onChange:(this.checkPriceFrom(this.state.price_to),function(e){return s.setState({price_to:e})})}),r.a.createElement(f.Input,{value:parseInt(this.state.price_to),onChange:(this.checkPriceFrom(this.state.price_to),function(e){return s.setState({price_to:e.target.value})}),type:"number"}),r.a.createElement(f.Div,{style:{align:"center"}},"\u0426\u0435\u043d\u0430 \u0434\u043e (\u0440\u0443\u0431)"))))))))),r.a.createElement(f.Button,{size:"xl",onClick:this.handleFilter.bind(this)},"\u0418\u0441\u043a\u0430\u0442\u044c")))}}]),t}(r.a.Component),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).checkConnection=function(){var e=window.navigator.onLine;a.state.connectionStatus!==e&&(a.setState({connectionStatus:e}),e?a.goByName("home"):a.goByName("offline"))},a.go=function(e){window.scroll({top:0}),a.setState({activePanel:e.currentTarget.dataset.to})},a.goByName=function(e){window.scroll({top:0}),a.setState({activePanel:e})},a.setTariffs=function(e){Object(v.a)(Object(v.a)(a)).tariffs=e},a.setFiltersVPS=function(e){Object(v.a)(Object(v.a)(a)).filtersvps=e},a.state={activePanel:"home",fetchedUser:null,access_token:null,popout:null,keywords:"",connectionStatus:!0,positionForOpenStats:0},a.categories=["VPS","Dedicaded"],a.tariffs=[],a.filtersvps={diskvalue_from:0,diskvalue_to:0,ramvalue_from:0,ramvalue_to:0,cpucount_from:0,cpucount_to:0,intettraficlimit:0,intettspeedlimit:0,price_to:0,price_from:0,country:"",typevirt:"",disktype:"",ostype:"",stats_reach_to:0,stats_views_to:0,revenue_to:0,expense_to:0,members_to:0,stats_reach_from:0,stats_views_from:0,revenue_from:0,expense_from:0,members_from:0,category:null,keywords:""},a.current_community_for_edit={id:0,revenue:0,expense:0,price:0,info:"",category:"",name:"",link:"",owner_link:"",owner_vk_id:0,vk_id:0},a.current_community_id_for_stats=0,a.homeTab=null,a.homePage=1,a.currentDialog=0,a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this;window.onpopstate=function(t){if("/"===window.location.pathname)if(window.confirm("Are you sure?"))e.setState({activePanel:window.location.pathname});else{var a=e.state.activePanel;window.history.pushState({activePanel:a},a,a)}else e.setState({activePanel:window.location.pathname})},c.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppAccessTokenReceived":e.setState({access_token:t.detail.data.access_token});break;default:console.log(t.detail.type)}}),c.a.send("VKWebAppGetUserInfo",{}),window.setInterval(this.checkConnection,1e3);var a=new FormData;a.append("json",JSON.stringify({action:"get_vps_arr"})),fetch("https://zakupi.club/telegram_bot/bot_vpsvds/ajax_vps.php",{method:"POST",body:a}).then(function(e){return e.json()}).then(function(e){"Y"==e.success&&t.setTariffs(e.tariffs)})}},{key:"render",value:function(){return r.a.createElement(f.View,{activePanel:this.state.activePanel,popout:this.state.popout},r.a.createElement(_,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,app:this}),r.a.createElement(S,{id:"filtervps",fetchedUser:this.state.fetchedUser,go:this.go,app:this}))}}]),t}(r.a.Component);c.a.send("VKWebAppInit",{}),i.a.render(r.a.createElement(w,null),document.getElementById("root"))},63:function(e,t,a){},65:function(e,t,a){e.exports=a(114)}},[[65,1,2]]]);
//# sourceMappingURL=main.5ee55a9e.chunk.js.map