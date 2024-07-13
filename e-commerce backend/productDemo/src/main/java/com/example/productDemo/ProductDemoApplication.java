package com.example.productDemo;

import com.example.productDemo.dto.OnlineProductDto;
import com.example.productDemo.dto.ProductApiResponseDto;
import com.example.productDemo.entity.Role;
import com.example.productDemo.entity.User;
import com.example.productDemo.enums.RolesEnum;
import com.example.productDemo.repository.UserRepository;
import com.example.productDemo.service.serviceimpl.OnlineProductServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@SpringBootApplication
public class ProductDemoApplication implements CommandLineRunner{


	public static void main(String[] args) {
		SpringApplication.run(ProductDemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		User user = new User();
//		user.setEmail("saif@yahoo.com");
//		user.setPassword(passwordEncoder.encode("saif123"));
//		user.setFullName("saif barakat");
//		Role userRole = new Role();
//		userRole.setRoleType(RolesEnum.USER);
//		Role adminRole = new Role();
//		adminRole.setRoleType(RolesEnum.ADMIN);
//		user.setRoles(Set.of(userRole,adminRole));
//		userRepository.save(user);

//		ProductApiResponseDto onlineProductDtos= onlineProductService.getAllOnlineProducts();
//		System.out.println(Arrays.toString(onlineProductDtos.getData()));


//		OkHttpClient client = new OkHttpClient();
//
//
//			Request request = new Request.Builder()
//					.url("https://dummyjson.com/products")
//					.get()
//					.build();
//
//			try (Response response = client.newCall(request).execute()) {
//				if (response.isSuccessful()) {
//					String responseBody = response.body().string();
//					System.out.println("Response Body: " + responseBody);
//				} else {
//					throw new RuntimeException("Failed to fetch products, status code: " + response.code());
//				}
//			} catch (IOException e) {
//				throw new RuntimeException("Failed to execute request", e);
//			}
	}
}
