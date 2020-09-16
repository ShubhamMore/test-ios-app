export interface CourseData {
  id: number;
  name: string;
  code: string;
  fees: string;
  duration: string;
  gst: string;
  discription: string;
  totalFee: string;
}
export interface InstituteData {
  id: number;
  iname: string;
  address: { addressLine: string; locality: string; city: string; state: string; pin: number };
  googleMap: string;
  icontact: string;
  icategory: string[];
  iMetaTag: string[];
}
export interface StudentsData {
  id: number;
  sname: string;
  roll: string;
  email: string;
  scontact: string;
  parentName: string;
  parentContact: string;
  parentEmail: string;
  address: string;
  course: string;
  batch: string;
  discount: string;
  addDiscount: string;
  netPayable: string;
  installments: string;
  nextInstallment: string;
  amtCollected: string;
  mode: string;
  materialRecord: string;
}
export interface ReceiptData {
  id: number;
  businessName: string;
  address: string;
  gstNo: string;
  termsAndCondtions: string;
  fee: string;
}
export interface BatchData {
  id: number;
  course: string;
  code: string;
  discription: string;
}

export interface DiscountData {
  id: number;
  code: string;
  amount: string;
  discription: string;
}
