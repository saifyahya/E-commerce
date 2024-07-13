package com.example.productDemo.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ProductApiResponseDto {
    private OnlineProductDto[] products;

}
