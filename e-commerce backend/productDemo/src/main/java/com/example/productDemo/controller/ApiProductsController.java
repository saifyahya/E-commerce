package com.example.productDemo.controller;

import com.example.productDemo.dto.OnlineProductDto;
import com.example.productDemo.service.IOnlineProductService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@AllArgsConstructor
@CrossOrigin({"http://127.0.0.1:4200", "http://localhost:4200"})
@RequestMapping("/api")

public class ApiProductsController {
    private IOnlineProductService onlineProductService;

    @GetMapping("/onlineProducts")
    public  OnlineProductDto[] getAllProducts(){
        OnlineProductDto[] products=onlineProductService.getAllOnlineProducts().getProducts();
        System.out.println("controller: "+Arrays.toString(products));
        return products;
    }

    @GetMapping("/onlineProducts/search")
    public  OnlineProductDto[] getProductsByName(@RequestParam String name){
        OnlineProductDto[] products=onlineProductService.getProductsByName(name).getProducts();
        System.out.println("controller: "+Arrays.toString(products));
        return products;
    }

    @GetMapping("/onlineProducts/category")
    public  OnlineProductDto[] getProductsByCategory(@RequestParam String name){
        OnlineProductDto[] products=onlineProductService.getProductsByCategory(name).getProducts();
        System.out.println("controller: "+Arrays.toString(products));
        return products;
    }
}
