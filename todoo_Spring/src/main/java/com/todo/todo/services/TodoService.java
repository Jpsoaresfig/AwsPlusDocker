package com.todo.todo.services;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.todo.todo.dto.TodoRequest;
import com.todo.todo.entity.Todo;
import com.todo.todo.exception.TodoNotFoundException;
import com.todo.todo.repository.TodoRepository;

import java.nio.file.*;
import java.util.List;
import java.util.UUID;

@Service
public class TodoService {

    private final TodoRepository repo;
    private final Path uploadDir;

    public TodoService(TodoRepository repo, @Value("${app.upload.dir:uploads}") String uploadDir) {
        this.repo = repo;
        this.uploadDir = Paths.get(uploadDir).toAbsolutePath().normalize();
        try {
            Files.createDirectories(this.uploadDir);
        } catch (Exception e) {
            throw new RuntimeException("Could not create upload directory", e);
        }
    }

    public Todo create(TodoRequest req) {
        Todo t = new Todo(null, req.getTitle(), req.getDescription(), null);
        return repo.save(t);
    }

    public List<Todo> listAll() {
        return repo.findAll();
    }

    public void delete(Long id) {
        if (!repo.existsById(id)) throw new TodoNotFoundException(id);
        repo.deleteById(id);
    }

    public Todo attachImage(Long id, MultipartFile file) {
        Todo t = repo.findById(id).orElseThrow(() -> new TodoNotFoundException(id));
        try {
            String filename = UUID.randomUUID() + "-" + Paths.get(file.getOriginalFilename()).getFileName();
            Path target = uploadDir.resolve(filename);
            Files.copy(file.getInputStream(), target, StandardCopyOption.REPLACE_EXISTING);
            t.setImageUrl("/images/" + filename);
            return repo.save(t);
        } catch (Exception e) {
            throw new RuntimeException("Error saving file", e);
        }
    }
}
