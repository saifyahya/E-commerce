package com.example.productDemo.service;

import com.example.productDemo.dto.OnlineProductDto;
import com.example.productDemo.dto.ProductApiResponseDto;

import java.util.List;

public interface IOnlineProductService {
    ProductApiResponseDto getAllOnlineProducts();
    ProductApiResponseDto getProductsByName(String name);
    ProductApiResponseDto getProductsByCategory(String category);




}
