package com.jq.dbapi.plugin;

import com.jq.dbapi.common.ApiConfig;

import java.util.Map;

public class RedisDataChcher implements CachePlugin {

    @Override
    public void set(ApiConfig config, Map<String, Object> params, Object data) {

    }

    @Override
    public Object get(ApiConfig config, Map<String, Object> params) {
        return null;
    }
}
