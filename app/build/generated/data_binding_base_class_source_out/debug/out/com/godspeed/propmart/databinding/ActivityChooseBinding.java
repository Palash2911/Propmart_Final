// Generated by view binder compiler. Do not edit!
package com.godspeed.propmart.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.RelativeLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.godspeed.propmart.R;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class ActivityChooseBinding implements ViewBinding {
  @NonNull
  private final RelativeLayout rootView;

  @NonNull
  public final Button layout;

  @NonNull
  public final Button plot;

  @NonNull
  public final TextView tag1;

  private ActivityChooseBinding(@NonNull RelativeLayout rootView, @NonNull Button layout,
      @NonNull Button plot, @NonNull TextView tag1) {
    this.rootView = rootView;
    this.layout = layout;
    this.plot = plot;
    this.tag1 = tag1;
  }

  @Override
  @NonNull
  public RelativeLayout getRoot() {
    return rootView;
  }

  @NonNull
  public static ActivityChooseBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static ActivityChooseBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup parent, boolean attachToParent) {
    View root = inflater.inflate(R.layout.activity_choose, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static ActivityChooseBinding bind(@NonNull View rootView) {
    // The body of this method is generated in a way you would not otherwise write.
    // This is done to optimize the compiled bytecode for size and performance.
    int id;
    missingId: {
      id = R.id.layout;
      Button layout = ViewBindings.findChildViewById(rootView, id);
      if (layout == null) {
        break missingId;
      }

      id = R.id.plot;
      Button plot = ViewBindings.findChildViewById(rootView, id);
      if (plot == null) {
        break missingId;
      }

      id = R.id.tag1;
      TextView tag1 = ViewBindings.findChildViewById(rootView, id);
      if (tag1 == null) {
        break missingId;
      }

      return new ActivityChooseBinding((RelativeLayout) rootView, layout, plot, tag1);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}
