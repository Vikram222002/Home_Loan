
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public Eligibility:number;
  public MonthlyIncome:number;

  public EMI:number;
  public Loan:number;
  public Tenure:number;
  public ROI:number;

  Calculateeligibility()
  {
    this.Eligibility=60*(0.6*(this.MonthlyIncome));
  }

  CalculateEMI()
  {
    this.EMI=(this.Loan*this.ROI)*((Math.pow((1+this.ROI),this.Tenure))/(Math.pow((1+this.ROI),(this.Tenure-1))));
  }
  constructor() { }
 
  ngOnInit(): void {
  }

}