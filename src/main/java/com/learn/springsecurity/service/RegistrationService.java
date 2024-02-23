package com.learn.springsecurity.service;



// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.springsecurity.model.RegisterEntity;
import com.learn.springsecurity.repository.RegistrationRepository;
import java.util.List;
import java.util.Optional;

@Service
public class RegistrationService {

    private final RegistrationRepository registrationRepo;

    // @Autowired
    public RegistrationService(RegistrationRepository registrationRepo) {
        this.registrationRepo = registrationRepo;
    }

    public List<RegisterEntity> getAllRegistrations() {
        return registrationRepo.findAll();
    }

    public Optional<RegisterEntity> getRegistrationById(Long id) {
        return registrationRepo.findById(id);
    }

    public RegisterEntity createRegistration(RegisterEntity registrationData) {
        return registrationRepo.save(registrationData);
    }

    public RegisterEntity updateRegistration(Long id, RegisterEntity updatedRegistrationData) {
        if (registrationRepo.existsById(id)) {
            updatedRegistrationData.setId(id);
            return registrationRepo.save(updatedRegistrationData);
        } else {
            return null; // Handle not found
        }
    }

    public void deleteRegistration(Long id) {
        registrationRepo.deleteById(id);
    }
}
