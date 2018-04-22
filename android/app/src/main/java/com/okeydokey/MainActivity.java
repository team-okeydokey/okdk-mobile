package com.okeydokey;

import android.os.Bundle;

import com.facebook.react.ReactActivity;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;

import org.ethereum.geth.Account;
import org.ethereum.geth.Enode;
import org.ethereum.geth.Enodes;
import org.ethereum.geth.EthereumClient;
import org.ethereum.geth.Geth;
import org.ethereum.geth.KeyStore;
import org.ethereum.geth.Node;
import org.ethereum.geth.NodeConfig;
import org.ethereum.geth.NodeInfo;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "OkeyDokey";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        try {
            // Specify static-nodes.json.
            String staticNodesPath = getFilesDir() + Constants.GETH_PATH + "/static-nodes.json";
            storeJSON(staticNodesPath, Constants.bootNodeJSON);

            // Initialize node config.
            NodeConfig nodeConfig = Geth.newNodeConfig();
            // Set additional configs.
            nodeConfig.setEthereumNetworkID(2441);
            nodeConfig.setWhisperEnabled(true);
            nodeConfig.setEthereumEnabled(true);
            nodeConfig.setEthereumGenesis(Constants.genesisJSON);
//            Enodes bootNodes = Geth.newEnodes(1);
//            bootNodes.set(0, Geth.newEnode(Constants.BOOTNODE));
//            nodeConfig.setBootstrapNodes(bootNodes);

            // Define and start node.
            Node node = Geth.newNode(getFilesDir() + Constants.DATA_DIR, nodeConfig);
            node.start();

            // Add node to a singleton class.
            NodeManager nodeManager = NodeManager.getInstance();
            nodeManager.setNode(node);

            // Account management.
            KeyStore keystore = new KeyStore(getFilesDir() + "/keystore", Geth.LightScryptN, Geth.LightScryptP);
            Account newAccount = keystore.importKey(Constants.keyfile.getBytes(), "alsohardpassword", "reallyhardpassword");
            byte[] bytes = keystore.exportKey(newAccount, "reallyhardpassword", "alsohardpassword");
            nodeManager.setAccount(newAccount);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void storeJSON(String filename, String fileContents) {
        FileOutputStream fos;
        try {
            fos = new FileOutputStream (new File(filename));
            fos.write(fileContents.getBytes());
            fos.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
