package com.learn.springsecurity.service;





// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.springsecurity.model.ProfileEntity;
import com.learn.springsecurity.repository.ProfileRepo;

import java.util.List;
import java.util.Optional;

@Service
public class ProfileServiceImpl implements ProfileService {

    private final ProfileRepo profileRepository;

    // @Autowired
    public ProfileServiceImpl(ProfileRepo profileRepository) {
        this.profileRepository = profileRepository;
    }

    @Override
    public List<ProfileEntity> getAllProfiles() {
        return profileRepository.findAll();
    }

    @Override
    public Optional<ProfileEntity> getProfileById(Long id) {
        return profileRepository.findById(id);
    }

    @Override
    public ProfileEntity addProfile(ProfileEntity profileEntity) {
        // You can add validation or other business logic here
        return profileRepository.save(profileEntity);
    }

    @Override
    public ProfileEntity updateProfile(Long id, ProfileEntity profileEntity) {
        // You can add validation or other business logic here
        profileEntity.setId(id);  // Set the ID before saving
        return profileRepository.save(profileEntity);
    }

    @Override
    public void deleteProfile(Long id) {
        profileRepository.deleteById(id);
    }
}
