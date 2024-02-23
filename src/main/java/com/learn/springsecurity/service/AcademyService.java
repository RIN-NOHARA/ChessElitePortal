package com.learn.springsecurity.service;


// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.springsecurity.model.AcademyEntity;
import com.learn.springsecurity.repository.AcademyRepo;

import java.util.List;
import java.util.Optional;
@Service
public class AcademyService {

    private final AcademyRepo academyRepository;

    // @Autowired
    public AcademyService(AcademyRepo academyRepository) {
        this.academyRepository = academyRepository;
    }

    public List<AcademyEntity> getAllAcademies() {
        return academyRepository.findAll();
    }

    public AcademyEntity getAcademyById(Long id) {
        Optional<AcademyEntity> optionalAcademy = academyRepository.findById(id);
        return optionalAcademy.orElse(null);
    }

    public AcademyEntity saveAcademy(AcademyEntity academyEntity) {
        return academyRepository.save(academyEntity);
    }

    public AcademyEntity updateAcademy(Long id, AcademyEntity academyEntity) {
        Optional<AcademyEntity> optionalExistingAcademy = academyRepository.findById(id);

        if (optionalExistingAcademy.isPresent()) {
            AcademyEntity existingAcademy = optionalExistingAcademy.get();
            existingAcademy.setAcademyName(academyEntity.getAcademyName());
            existingAcademy.setDescription(academyEntity.getDescription());
            existingAcademy.setAddress(academyEntity.getAddress());
            existingAcademy.setMobile(academyEntity.getMobile());
            existingAcademy.setEmail(academyEntity.getEmail());
            // existingAcademy.setPicture(academyEntity.getPicture());

            return academyRepository.save(existingAcademy);
        } else {
            return null; // Academy with the given ID not found
        }
    }

    public void deleteAcademy(Long id) {
        academyRepository.deleteById(id);
    }
}
