package com.example.productDemo.entity;

import com.example.productDemo.enums.RolesConverter;
import com.example.productDemo.enums.RolesEnum;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name="user_role",
            joinColumns = {@JoinColumn(name = "user_id",referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name="role_id",referencedColumnName = "id")}
    )
    private Set<Role> roles;
   private String fullName;

   private String password ;
   private String email;
   private String Country;
   private String phoneNumber;

   @OneToMany(cascade = CascadeType.ALL,mappedBy = "user")
   @JsonIgnore
   private List<Cart> carts;

}
