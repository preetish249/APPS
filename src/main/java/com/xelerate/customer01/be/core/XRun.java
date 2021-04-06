
package com.xelerate.customer01.be.core;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Date;

import com.xelerate.core.Utils;
import com.xelerate.customer01.be.core.Config;
import com.xelerate.customer01.be.core.PrjStartup;
import com.xelerate.app.RequestProcessor;
import com.xelerate.app.UIUtils;
import com.xelerate.app.XelerateMessage;
import com.xelerate.web.WebUtils;

public class XRun {
	public static void main(String[] args) {
		System.out.println("Start..");
		////Initialize Context
		new Config().init();
		///Loading Project
		new PrjStartup().loadSmartTypes();
		runTest();
		System.out.println("Done..");
	}

	public static void runTest() {
		try {
			String sampleIp = Utils.getWarFileContent("/mockdata/sampleReq.json").toString();
			XelerateMessage msg = UIUtils.getMessage(sampleIp, com.xelerate.core.Const.CHANNEL_TYPE_WEB_APP, null);
            new RequestProcessor().process(msg);
			System.out.println("Response =>" + msg.resStr);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}
}
