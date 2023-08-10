import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  user: User | undefined | any;
  total: number | undefined | any;
  sumB: number | undefined | any;
  sumS: number | undefined | any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getBalance().subscribe((user) => {
      // console.log(user);
      this.user = user;

      console.log(user.bought);
      console.log(user.sold);
      this.sumB = 0;
      this.sumS = 0;

      for (let i = 0; i < user.bought.length; i++) {
        let pr: string = user.bought[i];
        console.log(pr);

        let userB = Number(pr.split(' | ').slice(2,3).toString()) * Number(pr.split(' | ').slice(3,4).toString());
        this.sumB = this.sumB + userB;
        console.log(this.sumB, "bought by piece");
        console.log(userB, "userB");
        
      }

      for (let i = 0; i < user.sold.length; i++) {
        let pr: string = user.sold[i];
        console.log(pr);

        let userS = Number(pr.split(' | ').slice(2,3).toString()) * Number(pr.split(' | ').slice(3,4).toString());
        this.sumS = this.sumS+ userS;
        console.log(this.sumS);
      }

      this.total = this.sumS - this.sumB;
      console.log(this.sumS, 'sold');
      console.log(this.sumB, 'bought');
      
      console.log(this.total, "total");

    });



    // const id = this.activatedRoute.snapshot.params['ideaId'];
    // console.log(id);

    // this.ideaService.getIdea(id).subscribe((idea) => {
    //   this.idea = idea;
    //   console.log({ idea });

    //   const cookie = this.cookieService.get('cookie');

    //   if (cookie) {
    //     this.checkOwner(cookie);
    //   } else {
    //     this.isOwner = true; //after auth REMOVE!!!! replace with isLogged type thing
    //   }
    // });
  }
}
