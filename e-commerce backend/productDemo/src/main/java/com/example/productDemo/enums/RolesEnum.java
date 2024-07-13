package com.example.productDemo.enums;

public enum RolesEnum {
    USER("user"),
    ADMIN("admin");
    private String roleName;

    RolesEnum(String roleName) {
        this.roleName = roleName;
    }
     public String getValue(){
        return this.roleName;
     }


    public static RolesEnum fromValue(String value) throws IllegalAccessException {
        for(RolesEnum role: RolesEnum.values()){
            if(role.getValue().equals(value)){
                return role;
            }
        }
        throw new IllegalAccessException("Unknown status value "+value);
    }

}
