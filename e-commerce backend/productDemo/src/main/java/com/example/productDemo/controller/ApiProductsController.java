package com.example.productDemo.controller;

import com.example.productDemo.dto.OnlineProductDto;
import com.example.productDemo.service.IOnlineProductService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController @AllArgsConstructor @CrossOrigin("http://127.0.0.1:4200") @RequestMapping("/api")

public class ApiProductsController {
    private IOnlineProductService onlineProductService;

    @GetMapping("/onlineProducts")
    public  OnlineProductDto[]getAllProducts(){
        OnlineProductDto[] p=onlineProductService.getAllOnlineProducts().getProducts();
        System.out.println("controller: "+Arrays.toString(p));
        return p;
    }
}
