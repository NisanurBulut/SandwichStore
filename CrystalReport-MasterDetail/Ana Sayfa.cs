using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CrystalReport_MasterDetail
{
    public partial class Anasayfa : Form
    {
        List<SalesInvoiceHeader> header = null;//master nesnelerini tutar
        List<SalesInvoiceDetail> detail = null;//detail nesnelerini tutar
        public Anasayfa()
        {
            InitializeComponent();
        }
        public void NesneYukle()
        {
            //Master için gerek  bilgileri yüklerim
            header = new List<SalesInvoiceHeader>();
            header.Add(new SalesInvoiceHeader { InvoiceNo = "1111", CustomerName = "John Doe" });
            header.Add(new SalesInvoiceHeader { InvoiceNo = "2222", CustomerName = "Mary Jane" });
            header.Add(new SalesInvoiceHeader { InvoiceNo = "3333", CustomerName = "Astin Martin" });
            header.Add(new SalesInvoiceHeader { InvoiceNo = "4444", CustomerName = "Peter Shaw" });
            header.Add(new SalesInvoiceHeader { InvoiceNo = "5555", CustomerName = "Patric Dun" });
            header.Add(new SalesInvoiceHeader { InvoiceNo = "6666", CustomerName = "Ashley Stunner" });
            header.Add(new SalesInvoiceHeader { InvoiceNo = "7777", CustomerName = "Robin Tunny" });
            header.Add(new SalesInvoiceHeader { InvoiceNo = "8888", CustomerName = "Robert Dawson" });
            header.Add(new SalesInvoiceHeader { InvoiceNo = "9999", CustomerName = "Ray Martin" });

            //Detay  için gereken bilgileri yüklerim
            detail = new List<SalesInvoiceDetail>();
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "1111", ItemName = "Samsung Galaxy S3", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "1111", ItemName = "Samsung Galaxy S2", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "1111", ItemName = "Samsung Galaxy S4", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "1111", ItemName = "Samsung Galaxy S", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "1111", ItemName = "Samsung Galaxy S1", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "2222", ItemName = "Samsung Galaxy S3", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "2222", ItemName = "Samsung Galaxy S2", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "2222", ItemName = "Samsung Galaxy S1", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "3333", ItemName = "Samsung Galaxy S", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "3333", ItemName = "Samsung Galaxy S4", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "3333", ItemName = "Samsung Galaxy S2", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "3333", ItemName = "Samsung Galaxy S1", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "4444", ItemName = "Samsung Galaxy S5", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "4444", ItemName = "Samsung Galaxy S5", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "5555", ItemName = "Samsung Galaxy S3", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "5555", ItemName = "Samsung Galaxy S2", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "5555", ItemName = "Samsung Galaxy S4", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "5555", ItemName = "Samsung Galaxy S", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "5555", ItemName = "Samsung Galaxy S1", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "6666", ItemName = "Samsung Galaxy S", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "6666", ItemName = "Samsung Galaxy S4", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "6666", ItemName = "Samsung Galaxy S2", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "6666", ItemName = "Samsung Galaxy S1", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "7777", ItemName = "Samsung Galaxy S3", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "7777", ItemName = "Samsung Galaxy S2", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "7777", ItemName = "Samsung Galaxy S4", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "7777", ItemName = "Samsung Galaxy S", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "7777", ItemName = "Samsung Galaxy S1", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "8888", ItemName = "Samsung Galaxy S3", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "8888", ItemName = "Samsung Galaxy S2", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "8888", ItemName = "Samsung Galaxy S1", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "9999", ItemName = "Samsung Galaxy S5", Quantity = 10 });
            detail.Add(new SalesInvoiceDetail() { InvoiceNo = "9999", ItemName = "Samsung Galaxy S5", Quantity = 10 });

        }

        private void Anasayfa_Load(object sender, EventArgs e)
        {

        }
    }
}
