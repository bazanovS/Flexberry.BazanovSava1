﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.BazanovSava1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Еда.
    /// </summary>
    // *** Start programmer edit section *** (Еда CustomAttributes)

    // *** End programmer edit section *** (Еда CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЕдаE", new string[] {
            "Продукты as \'Продукты\'",
            "Продукты.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Продукты.Наименование"})]
    [MasterViewDefineAttribute("ЕдаE", "Продукты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    public class Еда : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.BazanovSava1.Продукты fПродукты;
        
        private IIS.BazanovSava1.Заказ fЗаказ;
        
        // *** Start programmer edit section *** (Еда CustomMembers)

        // *** End programmer edit section *** (Еда CustomMembers)

        
        /// <summary>
        /// Еда.
        /// </summary>
        // *** Start programmer edit section *** (Еда.Продукты CustomAttributes)

        // *** End programmer edit section *** (Еда.Продукты CustomAttributes)
        [PropertyStorage(new string[] {
                "Продукты"})]
        [NotNull()]
        public virtual IIS.BazanovSava1.Продукты Продукты
        {
            get
            {
                // *** Start programmer edit section *** (Еда.Продукты Get start)

                // *** End programmer edit section *** (Еда.Продукты Get start)
                IIS.BazanovSava1.Продукты result = this.fПродукты;
                // *** Start programmer edit section *** (Еда.Продукты Get end)

                // *** End programmer edit section *** (Еда.Продукты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Еда.Продукты Set start)

                // *** End programmer edit section *** (Еда.Продукты Set start)
                this.fПродукты = value;
                // *** Start programmer edit section *** (Еда.Продукты Set end)

                // *** End programmer edit section *** (Еда.Продукты Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.BazanovSava1.Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Еда.Заказ CustomAttributes)

        // *** End programmer edit section *** (Еда.Заказ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Заказ"})]
        public virtual IIS.BazanovSava1.Заказ Заказ
        {
            get
            {
                // *** Start programmer edit section *** (Еда.Заказ Get start)

                // *** End programmer edit section *** (Еда.Заказ Get start)
                IIS.BazanovSava1.Заказ result = this.fЗаказ;
                // *** Start programmer edit section *** (Еда.Заказ Get end)

                // *** End programmer edit section *** (Еда.Заказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Еда.Заказ Set start)

                // *** End programmer edit section *** (Еда.Заказ Set start)
                this.fЗаказ = value;
                // *** Start programmer edit section *** (Еда.Заказ Set end)

                // *** End programmer edit section *** (Еда.Заказ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЕдаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЕдаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЕдаE", typeof(IIS.BazanovSava1.Еда));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Еда.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfЕда CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfЕда CustomAttributes)
    public class DetailArrayOfЕда : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.BazanovSava1.DetailArrayOfЕда members)

        // *** End programmer edit section *** (IIS.BazanovSava1.DetailArrayOfЕда members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Еда by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Еда.
        /// </summary>
        public DetailArrayOfЕда(IIS.BazanovSava1.Заказ fЗаказ) : 
                base(typeof(Еда), ((ICSSoft.STORMNET.DataObject)(fЗаказ)))
        {
        }
        
        public IIS.BazanovSava1.Еда this[int index]
        {
            get
            {
                return ((IIS.BazanovSava1.Еда)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.BazanovSava1.Еда dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
