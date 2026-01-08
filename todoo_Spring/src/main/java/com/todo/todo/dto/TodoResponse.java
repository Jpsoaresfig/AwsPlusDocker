package com.todo.todo.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoResponse {
    private Long id;
    private String title;
    private String description;
    private String imageUrl;
}
