package com.example.productDemo.repository;

import com.example.productDemo.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository  extends JpaRepository<Role,Long> {
}
