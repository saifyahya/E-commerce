package com.example.productDemo.service.serviceimpl;

import com.example.productDemo.entity.Role;
import com.example.productDemo.entity.User;
import com.example.productDemo.exception.ResourceNotFoundException;
import com.example.productDemo.repository.RoleRepository;
import com.example.productDemo.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {
    private UserRepository userRepository;
    private RoleRepository roleRepository;

    @Transactional
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> retrievedUser =  userRepository.findByEmail(email);
        User user = retrievedUser.orElseThrow(()-> new ResourceNotFoundException("User Service", "email",email));
        List<GrantedAuthority> authorityList = new ArrayList<>();
        user.getRoles().forEach((Role role)->{authorityList.add(new SimpleGrantedAuthority(role.getRoleType().getValue()));
        });
        return  new org.springframework.security.core.userdetails.User(user.getFullName(),user.getPassword(),authorityList);
    }
}
