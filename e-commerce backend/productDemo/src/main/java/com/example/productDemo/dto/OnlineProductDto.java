package com.example.productDemo.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

@Data
@NoArgsConstructor
public class OnlineProductDto {
    private long id;

    private String title;
    private String description;
    private String category;
    private double price;
    private double discountPercentage;
    private double rating;
    private int stock;
    private String brand;


    private String[] tags;
    private String[] images;
    private String product_page_url;

@JsonIgnore
    private String  product_offers_page_url;
    @JsonIgnore

    private String product_reviews_page_url;
    @JsonIgnore

    private String product_num_reviews;
    @JsonIgnore

    private String product_num_offers;
    @JsonIgnore

    private Object offer;
    @JsonIgnore

    private String product_rating;
    @JsonIgnore

    private String product_specs_page_url;
    @JsonIgnore

    private Object product_attributes;
}
