export class accessManagementsService {
  private accessmanagements = [
    {
      id: 1,
      name: 'Productionaccessmanagement',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testaccessmanagement',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devaccessmanagement',
      status: 'offline'
    }
  ];

  getaccessmanagements() {
    return this.accessmanagements;
  }

  getaccessmanagement(id: number) {
    const accessmanagement = this.accessmanagements.find(
      (s) => {
        return s.id === id;
      }
    );
    return accessmanagement;
  }

  updateaccessmanagement(id: number, accessmanagementInfo: {name: string, status: string}) {
    const accessmanagement = this.accessmanagements.find(
      (s) => {
        return s.id === id;
      }
    );
    if (accessmanagement) {
      accessmanagement.name = accessmanagementInfo.name;
      accessmanagement.status = accessmanagementInfo.status;
    }
  }
}
