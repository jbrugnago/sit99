sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"

], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("sit.ui.controller.View1", {
		onInit: function () {
			var images = {
				images: [
					{
						url: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
						description: "cat"
					},
					{
						url: "https://www.catster.com/wp-content/uploads/2017/11/A-Siamese-cat.jpg",
						description: "cat"
					},
					{
						url: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
						description: "cat"
					},
					{
						url: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
						description: "cat"
					},
					{
						url: "https://www.catster.com/wp-content/uploads/2017/11/A-Siamese-cat.jpg",
						description: "cat"
					},
					{
						url: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
						description: "cat"
					},
					{
						url: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
						description: "cat"
					},
					{
						url: "https://www.catster.com/wp-content/uploads/2017/11/A-Siamese-cat.jpg",
						description: "cat"
					},
					{
						url: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
						description: "cat"
					},
					{
						url: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
						description: "cat"
					},
					{
						url: "https://www.catster.com/wp-content/uploads/2017/11/A-Siamese-cat.jpg",
						description: "cat"
					},
					{
						url: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
						description: "cat"
					},
					{
						url: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
						description: "cat"
					},
					{
						url: "https://www.catster.com/wp-content/uploads/2017/11/A-Siamese-cat.jpg",
						description: "cat"
					},
					{
						url: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
						description: "cat"
					},
				]
			};
			this.getView().setModel(new JSONModel(images),"images");
		},
		
		search: function (e) {
			 var search = e.getParameters().query;
			 this.getView().getModel("images").loadData("/images/?query=".concat(search));
		}
	});
});