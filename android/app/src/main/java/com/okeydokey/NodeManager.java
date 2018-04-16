package com.okeydokey;

import org.ethereum.geth.Account;
import org.ethereum.geth.Node;

public class NodeManager {
    private Node node;
    private Account account;
    private static NodeManager instance = null;
    private NodeManager(){}

    public static NodeManager getInstance() {
        if (instance == null) {
            instance = new NodeManager();
        }
        return instance;
    }

    public Node getNode() {
        return node;
    }

    public void setNode(Node node) {
        this.node = node;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
