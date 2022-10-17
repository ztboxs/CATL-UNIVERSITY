package com.ztboxs.lieboxs.common;

import lombok.Data;

import java.io.Serializable;

/**
 * 通用删除请求
 *
 * @author ztboxs
 */
@Data
public class DeleteRequest implements Serializable {

    private static final long serialVersionUID = -5860707094194210842L;

    private long id;
}
