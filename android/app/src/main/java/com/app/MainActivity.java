package com.app;

import com.facebook.react.ReactActivity;
import com.imagepicker.permissions.OnImagePickerPermissionsCallback; 
import com.facebook.react.modules.core.PermissionListener;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
public class MainActivity extends ReactActivity {
  private PermissionListener listener;
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "App";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);  // here 
      super.onCreate(savedInstanceState);
  }
}
