!function(t){var e=Upfront.Settings&&Upfront.Settings.l10n?Upfront.Settings.l10n.global.views:Upfront.mainData.l10n.global.views;upfrontrjs.define(["scripts/upfront/upfront-views-editor/sidebar/sidebar-panel-draggable-elements"],function(t){return t.extend({className:"sidebar-panel upfront-panel-post_panel",parts:["Title","Contents","Excerpt","Featured Image","Author","Author Gravatar","Date","Update","Comments Count","Tags","Categories"],partElements:[],initialize:function(t){this.active=!1,this.elements=_([]),Upfront.Events.on("entity:drag_stop",this.reset_modules,this),Upfront.Events.on("layout:render",this.apply_state_binding,this)},get_title:function(){return e.post_components},loadElements:function(){this.elements=_([]);var t=this,e=Upfront.Content.PostElement,n=Upfront.Application.LayoutEditor.Objects;return _.each(this.parts,function(s){var o=new e({title:s,model:Upfront.Application.layout}),r="PostPart_"+o.slug;t.elements.push(o),n[r]||(n[r]={Model:o.Model,View:o.View,Element:e,Settings:o.Settings},Upfront.Models[r+"Model"]=o.Model,Upfront.Views[r+"View"]=o.View),t.partElements.push(o)}),Upfront.Events.trigger("sidebar:postparts:loaded"),this},unloadElements:function(){var t=Upfront.Application.LayoutEditor.Objects;return _.each(this.partElements,function(e){var n="PostPart_"+e.slug;e.remove(),delete t[n],delete Upfront.Models[n+"Model"],delete Upfront.Views[n+"View"]}),this.partElements=[],Upfront.Events.trigger("sidebar:postparts:unloaded"),this}})})}(jQuery);