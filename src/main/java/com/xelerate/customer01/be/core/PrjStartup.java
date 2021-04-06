package com.xelerate.customer01.be.core;

import java.util.HashMap;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import com.fasterxml.jackson.core.type.TypeReference;
import com.xelerate.be.core.ElementPropClassStore;
import com.xelerate.be.core.ElementProperties;

import com.xelerate.core.Utils;
import com.xelerate.log.core.LoggerIface;


public class PrjStartup implements ServletContextListener {
	private static LoggerIface log = Config.get().getLogger(PrjStartup.class);

	public void contextDestroyed(ServletContextEvent pservletcontextevt) {
		destroy();
	}

	public class StartupException extends RuntimeException {
		String msg = null;

		public StartupException(String pmsg) {
			msg = pmsg;
		}

		@Override
		public String toString() {
			return msg;
		}

		public String getMessage() {
			return msg;
		}
	}

	public void contextInitialized(ServletContextEvent pservletcontextevt) {
		try {
			System.out.println("Initailizing..");
			////Initialize Context
			new Config().init();
			///Load Smart Types
			loadSmartTypes();
			////URL
			String url = pservletcontextevt.getServletContext().getContextPath();
		} catch (Exception ex) {
			ex.printStackTrace();
			throw new StartupException("Initialization Failed..");
		}
	}

	public void loadSmartTypes() {
		TypeReference typeRef = null;
		try {
			/////Simple
			StringBuffer fileBuffer = Utils.getWarFileContent("/config/PropertyClasses/ElementPropertyClasses.json");
			if (fileBuffer != null) {
				typeRef = new TypeReference<HashMap<String, ElementProperties>>() {
				};
				ElementPropClassStore.propClasses = (HashMap<String, ElementProperties>) Utils.getObjFromString(fileBuffer.toString(), typeRef);
			} else {
				ElementPropClassStore.propClasses = new HashMap<String, ElementProperties>();
			}
		} catch (Exception ex) {
			ElementPropClassStore.propClasses = new HashMap<String, ElementProperties>();
		}
	}

	public void destroy() {
	}
}
