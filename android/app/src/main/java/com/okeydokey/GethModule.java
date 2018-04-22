package com.okeydokey;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import org.ethereum.geth.EthereumClient;
import org.ethereum.geth.NewMessage;
import org.ethereum.geth.Context;
import org.ethereum.geth.Node;
import org.ethereum.geth.WhisperClient;

public class GethModule extends ReactContextBaseJavaModule {

  public GethModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "GethModule";
  }

  @ReactMethod
  public void send(String password, String topic, 
    String payload, Callback onMessage) {

    try {
      Context context = new Context();
      // Fetch client.
      Node node = NodeManager.getInstance().getNode();
      WhisperClient whisperClient = node.getWhisperClient();
      // Add symkey.
      String symkeyId = whisperClient.generateSymmetricKeyFromPassword(context, password);
//      whisperClient.addSymmetricKey(context, symkey);
      // Set message params.
      NewMessage newMessage = new NewMessage();
      newMessage.setSymKeyID(symkeyId);
      newMessage.setTopic(topic.getBytes());
      newMessage.setPowTarget(0.5);
      newMessage.setPowTime(3);
      newMessage.setPayload(payload.getBytes());
      // Post message.
      whisperClient.post(context, newMessage);
      onMessage.invoke("Did it go through?");
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

}