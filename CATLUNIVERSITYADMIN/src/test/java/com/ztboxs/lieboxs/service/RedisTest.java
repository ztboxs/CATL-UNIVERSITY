package com.ztboxs.lieboxs.service;

import com.ztboxs.lieboxs.model.domain.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;

import javax.annotation.Resource;

@SpringBootTest
public class RedisTest {

    @Resource
    private RedisTemplate redisTemplate;

    @Test
    void test() {
        ValueOperations valueOperations = redisTemplate.opsForValue();
        // 增
        valueOperations.set("ztboxsString", "dog");
        valueOperations.set("ztboxsInt", 1);
        valueOperations.set("ztboxsDouble", 2.0);
        User user = new User();
        user.setId(1L);
        user.setUsername("ztboxs");
        valueOperations.set("ztboxsUser", user);
        // 查
        Object ztboxs = valueOperations.get("ztboxsString");
        Assertions.assertTrue("dog".equals((String) ztboxs));
        ztboxs = valueOperations.get("ztboxsInt");
        Assertions.assertTrue(1 == (Integer) ztboxs);
        ztboxs = valueOperations.get("ztboxsDouble");
        Assertions.assertTrue(2.0 == (Double) ztboxs);
        System.out.println(valueOperations.get("ztboxsUser"));
        valueOperations.set("ztboxsString", "dog");
        redisTemplate.delete("ztboxsString");
    }
}
