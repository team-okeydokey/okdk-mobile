package com.okeydokey;

/**
 * Created by seongmin on 4/4/18.
 */

public class Constants {
    public static final String DATA_DIR = "/.datadir";
    public static final String GETH_PATH = DATA_DIR + "/GethDroid";
    public static final String BOOTNODE = "enode://9d2a9f15d17a8ca36193d1ebcaed1e295008e46da259b642523f5144179a8a970f2473743dc7472267473f33101d7203b16856099bbf74465c70fd793e503140@159.89.237.125:30303";
    public static final String keyfile = "{\"address\":\"c4beb45d0240c8d18b0589db6abad9b135e6612c\",\"crypto\":{\"cipher\":\"aes-128-ctr\",\"ciphertext\":\"9111c04efc353eff245ccb7033bbbd01c5ee5da96b657505c8d68677067af044\",\"cipherparams\":{\"iv\":\"6282b3bf1b1d077cd84c853a8861189d\"},\"kdf\":\"scrypt\",\"kdfparams\":{\"dklen\":32,\"n\":4096,\"p\":6,\"r\":8,\"salt\":\"20d323a2b276a660888e378ecb5f81b01bdbe902def6575c57c0c4db4fd064f9\"},\"mac\":\"7fda57c3954594ddd90d8b1e45a70012a3834fe47c38dee114abd531a3e1ad48\"},\"id\":\"348714cf-9457-4fb9-83e8-cffa259a55d8\",\"version\":3}";
    public static final String bootNodeJSON = "[\"enode://9d2a9f15d17a8ca36193d1ebcaed1e295008e46da259b642523f5144179a8a970f2473743dc7472267473f33101d7203b16856099bbf74465c70fd793e503140@159.89.237.125:30303\"]";
    public static final String genesisJSON = "{\"config\": {\"chainId\": 2441,\"homesteadBlock\": 0,\"eip155Block\": 0,\"eip158Block\": 0,\"byzantiumBlock\": 0},\"difficulty\": \"10\",\"gasLimit\": \"2000000\",\"alloc\": {\"7b684d27167d208c66584ece7f09d8bc8f86ffff\": { \"balance\":\"100000000000000000000000\"},\"ae13d41d66af28380c7af6d825ab557eb271ffff\": {\"balance\":\"120000000000000000000000\"}}}";
}