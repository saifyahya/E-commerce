package com.example.productDemo.enums;

import com.example.productDemo.enums.RolesEnum;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;


@Converter(autoApply = true)
public class RolesConverter implements AttributeConverter<RolesEnum,String> {
    @Override
    public String convertToDatabaseColumn(RolesEnum rolesEnum) {
        if(rolesEnum==null)
            return null;
        return rolesEnum.getValue();
    }

    @Override
    public RolesEnum convertToEntityAttribute(String s) {
        if (s==null)
            return null;
        try {
            return RolesEnum.fromValue(s);
        } catch (IllegalAccessException e) {
            throw new RuntimeException(e);
        }    }
}
