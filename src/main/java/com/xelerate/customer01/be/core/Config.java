package com.xelerate.customer01.be.core;

import com.xelerate.api.contracts.ContextIface;
public class Config extends com.xelerate.app.Config {
	///Additional Properties
	public static String appId = "customer01";
	public static String previewPath = "";
	public static String previewUrl = "";
	public static String projectsFolder = "";

	public void init() {
		super.init(appId);
		previewPath = getProperty("previewPath");
		previewUrl = getProperty("previewUrl");
		projectsFolder = getProperty("projectsFolder");
		//System.out.println("App Sp Props :" + previewPath + ":::" + previewUrl + ":::" + projectsFolder);
	}

	public static String getPreviewPath() {
		return previewPath;
	}

	public static String getPreviewUrl() {
		return previewUrl;
	}

	public static String getProjectsFolder() {
		return projectsFolder;
	}
}
