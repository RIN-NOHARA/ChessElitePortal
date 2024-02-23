package com.learn.springsecurity.service;




import java.util.List;
import java.util.Optional;

import com.learn.springsecurity.model.ProfileEntity;

public interface ProfileService {

    List<ProfileEntity> getAllProfiles();

    Optional<ProfileEntity> getProfileById(Long id);

    ProfileEntity addProfile(ProfileEntity profileEntity);

    ProfileEntity updateProfile(Long id, ProfileEntity profileEntity);

    void deleteProfile(Long id);
}
