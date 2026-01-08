package com.todo.todo.controllers;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.todo.todo.dto.TodoRequest;
import com.todo.todo.dto.TodoResponse;
import com.todo.todo.entity.Todo;
import com.todo.todo.services.TodoService;

import java.util.List;
import java.util.stream.Collectors;


@RestController

@RequestMapping("/tasks")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"}, allowCredentials = "true")
public class TodoController {

    @Autowired
    private TodoService service;

    @PostMapping
    public ResponseEntity<TodoResponse> create(@Valid @RequestBody TodoRequest req) {
        Todo t = service.create(req);
        return ResponseEntity.ok(toDto(t));
    }

    @GetMapping
    public List<TodoResponse> list() {
        return service.listAll().stream().map(this::toDto).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/image")
    public ResponseEntity<TodoResponse> uploadImage(@PathVariable Long id, @RequestParam("file") MultipartFile file) {
        Todo t = service.attachImage(id, file);
        return ResponseEntity.ok(toDto(t));
    }

    private TodoResponse toDto(Todo t) {
        return new TodoResponse(t.getId(), t.getTitle(), t.getDescription(), t.getImageUrl());
    }

   
}
