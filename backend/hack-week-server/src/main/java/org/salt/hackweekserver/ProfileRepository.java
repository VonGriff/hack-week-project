package org.salt.hackweekserver;

import org.salt.hackweekserver.model.Profile;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends ListCrudRepository<Profile, Long> {
}
