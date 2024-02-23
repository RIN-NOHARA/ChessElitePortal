package com.learn.springsecurity.controller;



import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.learn.springsecurity.model.RegisterEntity;
import com.learn.springsecurity.service.RegistrationService;




@RestController
@RequestMapping("/api/registrations")
@CrossOrigin(origins = "http://localhost:5713")
public class RegistrationController {

    private final RegistrationService registrationService;

    // @Autowired
    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @GetMapping("/")
    public List<RegisterEntity> getAllRegistrations() {
        return registrationService.getAllRegistrations();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RegisterEntity> getRegistrationById(@PathVariable Long id) {
        return ResponseEntity.of(registrationService.getRegistrationById(id));
    }

    @PostMapping("/")
    public ResponseEntity<RegisterEntity> createRegistration(@RequestBody RegisterEntity registrationData) {
        try {
            RegisterEntity createdRegistration = registrationService.createRegistration(registrationData);
            return ResponseEntity.ok(createdRegistration);
        } catch (Exception e) {
            // Log the exception or handle it as needed
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<RegisterEntity> updateRegistration(@PathVariable Long id,
                                                            @RequestBody RegisterEntity updatedRegistrationData) {
        try {
            RegisterEntity updatedRegistration = registrationService.updateRegistration(id, updatedRegistrationData);
            return updatedRegistration != null
                    ? ResponseEntity.ok(updatedRegistration)
                    : ResponseEntity.notFound().build();
        } catch (Exception e) {
            // Log the exception or handle it as needed
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRegistration(@PathVariable Long id) {
        try {
            registrationService.deleteRegistration(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            // Log the exception or handle it as needed
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
