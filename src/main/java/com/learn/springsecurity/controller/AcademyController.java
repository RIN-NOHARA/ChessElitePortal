package com.learn.springsecurity.controller;



import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.learn.springsecurity.dto.AcademyRequest;
import com.learn.springsecurity.model.AcademyEntity;
import com.learn.springsecurity.service.AcademyService;

import java.util.List;

@RestController
@RequestMapping("/api/academies")
@CrossOrigin(origins = "http://localhost:5173")
public class AcademyController {

    private final AcademyService academyService;

    public AcademyController(AcademyService academyService) {
        this.academyService = academyService;
    }

    @GetMapping("/")
    public List<AcademyEntity> getAllAcademies() {
        return academyService.getAllAcademies();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AcademyEntity> getAcademyById(@PathVariable Long id) {
        AcademyEntity academyEntity = academyService.getAcademyById(id);
        return academyEntity != null
                ? ResponseEntity.ok(academyEntity)
                : ResponseEntity.notFound().build();
    }

    @PostMapping("/")
    public ResponseEntity<Object> createAcademy(@RequestBody AcademyRequest academyRequest) {
        try {
            AcademyEntity academyEntity = new AcademyEntity();
            academyEntity.setAcademyName(academyRequest.getAcademyName());
            academyEntity.setDescription(academyRequest.getDescription());
            academyEntity.setAddress(academyRequest.getAddress());
            academyEntity.setMobile(academyRequest.getMobile());
            academyEntity.setEmail(academyRequest.getEmail());
    
            AcademyEntity savedAcademy = academyService.saveAcademy(academyEntity);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedAcademy);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to process the request: " + e.getMessage());
        }
    }
    

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateAcademy(@PathVariable Long id,
                                                @RequestBody AcademyEntity academyEntity) {
        AcademyEntity updatedAcademy = academyService.updateAcademy(id, academyEntity);
        return updatedAcademy != null
                ? ResponseEntity.ok(updatedAcademy)
                : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAcademy(@PathVariable Long id) {
        academyService.deleteAcademy(id);
        return ResponseEntity.noContent().build();
    }
}
