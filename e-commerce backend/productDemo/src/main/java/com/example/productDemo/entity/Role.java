package com.example.productDemo.entity;

import com.example.productDemo.enums.RolesConverter;
import com.example.productDemo.enums.RolesEnum;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Convert(converter = RolesConverter.class)
    private RolesEnum roleType;

    @ManyToMany(mappedBy = "roles")
    @JsonIgnore
    Set<User> users;

    public void addToUsers(User user) {
        if (users == null){
            users = new HashSet();
        }
        users.add(user);
    }
}
