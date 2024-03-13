package org.salt.hackweekserver;

import org.salt.hackweekserver.model.Group;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupRepository extends ListCrudRepository<Group, Long> {
}
