package com.example.productDemo.service.serviceimpl;

import com.example.productDemo.dto.OnlineProductDto;
import com.example.productDemo.dto.ProductApiResponseDto;
import com.example.productDemo.service.IOnlineProductService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.stereotype.Service;

import java.io.DataInput;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;


@Service
public class OnlineProductServiceImpl implements IOnlineProductService {

    @Override
    public ProductApiResponseDto getAllOnlineProducts() {

        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url("https://dummyjson.com/products")
                .get()
                .build();

        Response response = null;
        try {
            response = client.newCall(request).execute();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        if (response.code() == 200) {
            try {
                String responseBody = response.body().string();

                ObjectMapper objectMapper = new ObjectMapper();
                objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

                return objectMapper.readValue( responseBody, ProductApiResponseDto.class);
            } catch (IOException e) {
                System.out.println(e.getMessage());
                throw new RuntimeException("Failed to parse JSON response", e.getCause());
            }
        } else {
            throw new RuntimeException("Failed to fetch products, status code: " + response.code());
        }
    }
}
